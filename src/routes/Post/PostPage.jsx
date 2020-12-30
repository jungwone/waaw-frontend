import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import {
  POST_DETAIL_QUERY,
  LIKE_POST,
  COMMENT_LIST_QUERY,
  CREATE_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
} from "./Queries";
import { toast } from "react-toastify";
import { WhiteWrapper } from "../../styles/Wrapper";
import CommentList from "../../components/Comment/CommentList";
import useInput from "../../hooks/useInput";
import CommentWriteForm from "../../components/Comment/CommentWriteForm";
import { UserContext } from "../../context/UserContext";

let take = 10;

const PostPage = () => {
  const { uuid } = useParams();
  const commentContent = useInput("");
  const [newComment, setNewComment] = useState([]);
  const [hasMoreComment, setHasMoreComment] = useState(true);
  const myInfo = useContext(UserContext);

  const { data, loading } = useQuery(POST_DETAIL_QUERY, {
    variables: { uuid },
  });

  const { data: commentData, loading: commentLoading, fetchMore } = useQuery(
    COMMENT_LIST_QUERY,
    {
      variables: {
        postId: uuid,
        skip: 0,
        take,
      },
    }
  );

  const [deletePostMutation] = useMutation(DELETE_POST, {
    variables: {
      postId: uuid,
    },
  });

  const onDeletePost = async () => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (!check) {
      return;
    }
    try {
      await deletePostMutation();
      alert("포스트가 삭제되었습니다.");
      window.location.href = "/";
    } catch {
      toast.error("요청에 실패했습니다.");
    }
  };

  const getMoreComments = () => {
    setNewComment([]);
    fetchMore({
      variables: {
        postId: uuid,
        skip: commentData.findManyComments.length,
        take,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.findManyComments.length < take) {
          setHasMoreComment(false);
        }
        fetchMoreResult.findManyComments = [
          ...prev.findManyComments,
          ...fetchMoreResult.findManyComments,
        ];
        return fetchMoreResult;
      },
    });
  };

  const [createCommentMutation] = useMutation(CREATE_COMMENT, {
    variables: {
      postId: uuid,
      content: commentContent.value,
    },
    update(cache, { data }) {
      // const { findManyComments } = cache.readQuery({
      //   query: COMMENT_LIST_QUERY,
      //   variables: {
      //     postId: uuid,
      //     skip: 0,
      //     take,
      //   },
      // });
      setNewComment([...newComment, data.createComment]);

      // cache.writeQuery({
      //   query: COMMENT_LIST_QUERY,
      //   variables: {
      //     postId: uuid,
      //     skip: 0,
      //     take,
      //   },
      //   data: { findManyComments: findManyComments.concat(data.createComment) },
      // });
    },
  });

  const [deleteCommentMutation] = useMutation(DELETE_COMMENT);

  const deleteComment = async (commentId) => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (!check) {
      return;
    }
    try {
      await deleteCommentMutation({
        variables: { commentId },
        update: (cache, { data: { deleteComment } }) => {
          const { findManyComments } = cache.readQuery({
            query: COMMENT_LIST_QUERY,
            variables: {
              postId: uuid,
              skip: 0,
              take,
            },
          });

          findManyComments.filter((comment) => {
            return comment.uuid !== deleteComment.uuid;
          });

          setNewComment([
            ...newComment.filter(
              (comment) => comment.uuid !== deleteComment.uuid
            ),
          ]);

          cache.writeQuery({
            query: COMMENT_LIST_QUERY,
            variables: {
              postId: uuid,
              skip: 0,
              take,
            },
            data: {
              findManyComments: findManyComments.filter(
                (comment) => comment.uuid !== deleteComment.uuid
              ),
            },
          });
        },
      });
    } catch {
      toast.error("요청에 실패했습니다.");
    }
  };

  const onSubmitContent = async (e) => {
    e.preventDefault();
    if (!myInfo) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }

    if (commentContent.value === "") {
      toast.warning("내용을 입력해주세요.");
      return;
    }

    try {
      const {
        data: { createComment },
      } = await createCommentMutation();
      if (createComment) {
        commentContent.setValue("");
      }
    } catch (error) {
      toast.error("댓글 작성에 실패했습니다.");
    }
  };

  const [likePostMutation] = useMutation(LIKE_POST, {
    variables: {
      postId: uuid,
    },
    update(cache, { data }) {
      let { findOnePost } = cache.readQuery({
        query: POST_DETAIL_QUERY,
        variables: {
          uuid,
        },
      });

      if (data.toggleLike) {
        findOnePost.likeCount = findOnePost.likeCount + 1;
        findOnePost.likes = [...findOnePost.likes, { userId: myInfo.uuid }];
      } else {
        findOnePost.likeCount = findOnePost.likeCount - 1;
        findOnePost.likes = [
          ...findOnePost.likes.filter((user) => user.userId !== myInfo.uuid),
        ];
      }

      findOnePost.isLiked = data.toggleLike;
    },
  });

  const toggleLike = () => {
    if (!myInfo) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }
    likePostMutation().catch((e) => {
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
    });
  };

  return (
    <WhiteWrapper>
      {!loading && data && data.findOnePost && (
        <>
          <Post
            post={data.findOnePost}
            onDeletePost={onDeletePost}
            toggleLike={toggleLike}
            myInfo={myInfo}
            isMe={myInfo?.uuid === data.findOnePost.author.uuid}
            isLiked={
              myInfo
                ? data.findOnePost.likes.find(
                    (user) => user.userId === myInfo.uuid
                  )
                : false
            }
          />
          {!commentLoading && commentData && (
            <CommentList
              commentData={commentData.findManyComments}
              getMoreComments={getMoreComments}
              hasMoreComment={hasMoreComment}
              newComment={newComment}
              deleteComment={deleteComment}
              myInfo={myInfo}
            />
          )}
          <CommentWriteForm
            commentContent={commentContent}
            onSubmitComment={onSubmitContent}
          />
        </>
      )}
    </WhiteWrapper>
  );
};

export default PostPage;

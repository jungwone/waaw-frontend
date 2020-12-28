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

  const deleteComment = (commentId) => {
    deleteCommentMutation({
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
        console.log(deleteComment);
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
  };

  const onSubmitContent = async (e) => {
    e.preventDefault();

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
      } else {
        findOnePost.likeCount = findOnePost.likeCount - 1;
      }
      findOnePost.isLiked = data.toggleLike;
    },
  });

  const toggleLike = () => {
    likePostMutation().catch((e) => {
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
      // console.log(e.message);
    });
  };

  return (
    <WhiteWrapper>
      {!loading && data && data.findOnePost && (
        <>
          <Post
            post={data.findOnePost}
            toggleLike={toggleLike}
            myInfo={myInfo}
            isMe={myInfo.uuid === data.findOnePost.author.uuid}
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

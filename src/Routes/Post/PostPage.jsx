import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { POST_DETAIL_QUERY, LIKE_POST } from "./Queries";
import { toast } from "react-toastify";
import { WhiteWrapper } from "../../Styles/Wrapper";

const PostPage = () => {
  const { uuid } = useParams();
  const { data, loading } = useQuery(POST_DETAIL_QUERY, {
    variables: {
      uuid,
    },
  });
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
        <Post post={data.findOnePost} toggleLike={toggleLike} />
      )}
    </WhiteWrapper>
  );
};

export default PostPage;

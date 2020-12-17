import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { POST_DETAIL_QUERY, LIKE_POST } from "./Queries";

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
    likePostMutation();
  };

  return (
    <>
      {!loading && data && data.findOnePost && (
        <Post post={data.findOnePost} toggleLike={toggleLike} />
      )}
    </>
  );
};

export default PostPage;

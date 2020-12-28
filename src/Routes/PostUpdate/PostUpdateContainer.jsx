import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { POST_DETAIL_QUERY } from "../Post/Queries";
import PostUpdatePage from "./PostUpdatePage";

const PostUpdateContainer = () => {
  const { uuid } = useParams();
  const { data, loading } = useQuery(POST_DETAIL_QUERY, {
    variables: { uuid },
  });

  return (
    <>
      {!loading && data && data.findOnePost && (
        <PostUpdatePage post={data.findOnePost} />
      )}
    </>
  );
};

export default PostUpdateContainer;

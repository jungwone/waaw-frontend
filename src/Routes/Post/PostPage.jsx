import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";

const POST_DETAIL_QUERY = gql`
  query FindOnePost($uuid: String!) {
    findOnePost(uuid: $uuid) {
      uuid
      title
      content
      fileUrl
      createdAt
      author {
        nickname
        avatar
      }
    }
  }
`;

const PostPage = () => {
  const { uuid } = useParams();
  const { data, loading } = useQuery(POST_DETAIL_QUERY, {
    variables: {
      uuid,
    },
  });

  return (
    <>
      <Post data={data} loading={loading} />
    </>
  );
};

export default PostPage;

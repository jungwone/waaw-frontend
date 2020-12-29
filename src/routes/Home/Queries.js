import { gql } from "@apollo/react-hooks";

export const POPULAR_POST_QUERY = gql`
  query FindPopularPosts($skip: Int!, $take: Int!) {
    findPopularPosts(skip: $skip, take: $take) {
      id
      uuid
      title
      content
      likeCount
      thumbnail
      createdAt
      author {
        id
        nickname
        avatar
      }
    }
  }
`;

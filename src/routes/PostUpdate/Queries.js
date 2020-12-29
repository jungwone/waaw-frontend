import { gql } from "apollo-boost";

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $postId: String!
    $title: String!
    $content: String!
    $category: String!
    $open: Boolean!
    $thumbnail: String
  ) {
    updatePost(
      postId: $postId
      title: $title
      content: $content
      category: $category
      open: $open
      thumbnail: $thumbnail
    ) {
      uuid
      title
      content
      category
      open
      thumbnail
      createdAt
    }
  }
`;

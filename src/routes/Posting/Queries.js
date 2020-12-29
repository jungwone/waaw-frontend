import { gql } from "apollo-boost";

export const UPSERT_POST = gql`
  mutation UpsertPost(
    $id: Int
    $title: String!
    $content: String!
    $category: String!
    $open: Boolean!
    $thumbnail: String
  ) {
    upsertPost(
      id: $id
      title: $title
      content: $content
      category: $category
      open: $open
      thumbnail: $thumbnail
    ) {
      id
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

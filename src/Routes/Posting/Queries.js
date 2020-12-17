import { gql } from "apollo-boost";

export const UPSERT_POST = gql`
  mutation UpsertPost(
    $id: Int
    $title: String!
    $content: String!
    $category: Category!
    $open: Boolean!
    $fileUrl: String
  ) {
    upsertPost(
      id: $id
      title: $title
      content: $content
      category: $category
      open: $open
      fileUrl: $fileUrl
    ) {
      id
      uuid
      title
      content
      category
      open
      fileUrl
      createdAt
    }
  }
`;

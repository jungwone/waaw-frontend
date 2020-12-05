import { gql } from "apollo-boost";

export const UPSERT_POST = gql`
  mutation UpsertPost(
    $id: Int
    $title: String!
    $content: String!
    $category: Category!
    $open: Boolean!
  ) {
    upsertPost(
      id: $id
      title: $title
      content: $content
      category: $category
      open: $open
    ) {
      id
      title
      content
      category
      open
    }
  }
`;

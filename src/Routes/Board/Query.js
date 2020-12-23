import { gql } from "@apollo/react-hooks";

export const BOARD_QUERY = gql`
  query FindManyPostsWithCategory(
    $category: Category
    $skip: Int!
    $take: Int!
  ) {
    findManyPostsWithCategory(category: $category, skip: $skip, take: $take) {
      id
      uuid
      title
      content
      category
      thumbnail
      likeCount
      totalPostCount
      createdAt
      author {
        id
        nickname
        avatar
      }
    }
  }
`;

import { gql } from "@apollo/react-hooks";

export const HOME_POST_QUERY = gql`
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
      fileUrl
      createdAt
      author {
        id
        nickname
        avatar
      }
    }
  }
`;

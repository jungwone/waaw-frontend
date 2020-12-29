import { gql } from "apollo-boost";

export const USER_QUERY = gql`
  query FindUser($userId: String!) {
    findUser(userId: $userId) {
      id
      uuid
      nickname
      avatar
      intro
      postCount
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $userId: String!
    $avatar: String
    $intro: String
    $nickname: String
  ) {
    updateUser(
      userId: $userId
      avatar: $avatar
      intro: $intro
      nickname: $nickname
    ) {
      id
      uuid
      nickname
      avatar
      intro
    }
  }
`;

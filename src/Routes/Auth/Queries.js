import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $email: String!
    $name: String!
    $nickname: String!
    $bio: String
  ) {
    createAccount(email: $email, name: $name, nickname: $nickname, bio: $bio)
  }
`;

export const REQUEST_LOGIN_CODE = gql`
  mutation RequestLoginCode($email: String!) {
    requestLoginCode(email: $email)
  }
`;

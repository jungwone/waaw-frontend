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

export const CONFIRM_LOGIN_CODE = gql`
  mutation ConfirmLoginCode($email: String!, $loginCode: String!) {
    confirmLoginCode(email: $email, loginCode: $loginCode)
  }
`;

export const LOCAL_LOGIN = gql`
  mutation LoginUser($token: String!) {
    loginUser(token: $token) @client
  }
`;

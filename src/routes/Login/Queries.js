import { gql } from "apollo-boost";

export const REQUEST_LOGIN_CODE = gql`
  mutation RequestLoginCode($email: String!) {
    requestLoginCode(email: $email)
  }
`;

export const CONFIRM_LOGIN_CODE = gql`
  mutation ConfirmLoginCode($email: String!, $loginCode: String!) {
    confirmLoginCode(email: $email, loginCode: $loginCode) {
      id
      uuid
      avatar
      token
    }
  }
`;

export const LOCAL_LOGIN = gql`
  mutation LoginUser($myInfo: MyInfo!) {
    loginUser(myInfo: $myInfo) @client
  }
`;

export const LOGOUT = gql`
  mutation LogoutUser {
    logoutUser @client
  }
`;

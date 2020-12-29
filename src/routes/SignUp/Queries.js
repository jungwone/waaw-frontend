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

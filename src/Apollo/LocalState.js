import { gql } from "apollo-boost";

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("waawToken") || false),
};

export const resolvers = {
  Mutation: {
    loginUser: (_, { myInfo }, { cache }) => {
      localStorage.setItem("waawToken", JSON.stringify(myInfo));
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logoutUser: (_, __, { cache }) => {
      localStorage.removeItem("waawToken");
      window.location.reload();
      return null;
    },
  },
};

export const typeDefs = gql`
  enum Category {
    essay
    review
    dream
    poem
  }

  type MyInfo {
    id: ID!
    uuid: String!
    avatar: String!
    token: String!
  }
`;

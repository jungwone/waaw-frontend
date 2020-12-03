export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("waawToken") || false),
};

export const resolvers = {
  Mutation: {
    loginUser: (_, { token }, { cache }) => {
      localStorage.setItem("waawToken", token);
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
import ApolloClient from "apollo-boost";
import { defaults, resolvers, typeDefs } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("waawToken")}`,
  },
});

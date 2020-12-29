import ApolloClient from "apollo-boost";
import { defaults, resolvers, typeDefs } from "./LocalState";

const storageItem = JSON.parse(localStorage.getItem("waawToken"));
const token = storageItem ? storageItem.token : "";

export default new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://geulhouse-backend.herokuapp.com/",
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

import ApolloClient from "apollo-boost";
import { baseUrl } from "../config";
import { defaults, resolvers, typeDefs } from "./LocalState";

const storageItem = JSON.parse(localStorage.getItem("waawToken"));
const token = storageItem ? storageItem.token : "";

export default new ApolloClient({
  uri: baseUrl,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

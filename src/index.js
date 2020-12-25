import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "./apollo/ApolloClient";
import "./index.css";

ReactDOM.render(
  <>
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>
  </>,
  document.getElementById("root")
);

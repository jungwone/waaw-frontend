import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "./Apollo/ApolloClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthPage from "../Routes/Auth/AuthPage";
import HomePage from "../Routes/Home/HomePage";
import PostingPage from "../Routes/Posting/PostingPage";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <HomePage /> : <AuthPage />}
        </Route>
        <Route exact path="/posting">
          <PostingPage />
        </Route>
        <Route exact path="/profile"></Route>
      </Switch>
    </RouteWrapper>
  );
};

const RouteWrapper = styled.div`
  height: 100vh;
  padding: 30px;
  padding-top: 70px;
  position: relative;
  top: ${(props) => props.theme.headerHeight};
  font-family: "Nanum Gothic", sans-serif;
  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export default Routes;

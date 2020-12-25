import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthPage from "../routes/Auth/AuthPage";
import Home from "../routes/Home/Home";
import PostingPage from "../routes/Posting/PostingPage";
import PostPage from "../routes/Post/PostPage";
import BoardPage from "../routes/Board/BoardPage";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <AuthPage />}
        </Route>
        <Route exact path="/posting">
          <PostingPage />
        </Route>
        <Route exact path="/board/:category">
          <BoardPage />
        </Route>
        <Route exact path="/post/:uuid">
          <PostPage />
        </Route>
        <Route exact path="/profile"></Route>
      </Switch>
    </RouteWrapper>
  );
};

const RouteWrapper = styled.div`
  height: 100vh;
  position: relative;
  top: ${(props) => props.theme.headerHeight};
`;

export default Routes;

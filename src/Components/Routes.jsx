import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthPage from "../Routes/Auth/AuthPage";
import Home from "../Routes/Home/Home";
import PostingPage3 from "../Routes/Posting/PostingPage3";
import PostingPage from "../Routes/Posting/PostingPage";
import PostPage from "../Routes/Post/PostPage";
import Room from "../Routes/Room/Room";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <AuthPage />}
        </Route>
        <Route exact path="/posting">
          <PostingPage3 />
        </Route>
        <Route exact path="/posting2">
          <PostingPage />
        </Route>

        <Route exact path="/room/:category">
          <Room />
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

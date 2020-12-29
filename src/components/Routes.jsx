import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../routes/Home/Home";
import PostingPage from "../routes/Posting/PostingPage";
import PostPage from "../routes/Post/PostPage";
import BoardPage from "../routes/Board/BoardPage";
import ProfilePage from "../routes/Profile/ProfilePage";
import ProfileUpdatePage from "../routes/Profile/ProfileUpdatePage";
import PostUpdateContainer from "../routes/PostUpdate/PostUpdateContainer";
import SignUpPage from "../routes/SignUp/SignUpPage";
import LoginPage from "../routes/Login/LoginPage";
import NoticePage from "../routes/Notice/NoticePage";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          {isLoggedIn ? <Home /> : <SignUpPage />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Home /> : <LoginPage />}
        </Route>
        <Route exact path="/posting">
          {isLoggedIn ? <PostingPage /> : <Home />}
        </Route>
        <Route exact path="/board/:category">
          <BoardPage />
        </Route>
        <Route exact path="/post/:uuid">
          <PostPage />
        </Route>
        <Route exact path="/updatePost/:uuid">
          <PostUpdateContainer />
        </Route>
        <Route exact path="/profile/:uuid">
          <ProfilePage />
        </Route>
        <Route exact path="/updateProfile/:uuid">
          <ProfileUpdatePage />
        </Route>
        <Route exact path="/notice">
          <NoticePage />
        </Route>
      </Switch>
    </RouteWrapper>
  );
};

const RouteWrapper = styled.div`
  min-height: 100vh;
  top: ${(props) => props.theme.headerHeight};
`;

export default Routes;

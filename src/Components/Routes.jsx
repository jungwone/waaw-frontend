import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthPage from "../Routes/Auth/AuthPage";
import PostingPage from "../Routes/Posting/PostingPage";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? "Home" : <AuthPage />}
        </Route>
        <Route exact path="/posting">
          <PostingPage />
        </Route>
        <Route exact path="/profile">
          <img
            src="https://waaw-photo-bucket.s3.ap-northeast-2.amazonaws.com/1607325740978-image-.wqsmew0v73e.png"
            alt="test"
          />
        </Route>
      </Switch>
    </RouteWrapper>
  );
};

const RouteWrapper = styled.div`
  height: 90vh;
  padding: 0 30px;
  position: relative;
  top: ${(props) => props.theme.headerHeight};
`;

export default Routes;

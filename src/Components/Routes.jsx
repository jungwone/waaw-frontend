import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../Routes/Auth/AuthPage";
import styled from "styled-components";

const Routes = ({ isLoggedIn }) => {
  return (
    <RouteWrapper>
      <Switch>
        <Route path="/">{isLoggedIn ? "Home" : <AuthPage />}</Route>
      </Switch>
    </RouteWrapper>
  );
};

const RouteWrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  height: 90vh;
`;

export default Routes;

import React from "react";
import styled from "styled-components";

const LoginForm = () => {
  return (
    <Wrapper>
      <input type="email" required placeholder="abcd@mail.com" />
      <div>
        Are you first here? <span>Sign Up</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWdith};
`;

export default LoginForm;

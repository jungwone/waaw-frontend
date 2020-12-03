import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Text, ActionText } from "../SignUp/SignupForm";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = ({ email, setAction, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Text>로그인</Text>
      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="이메일"
        required
      />
      <Button text="로그인" />
      <SignUpText onClick={() => setAction("signUp")}>
        <span>
          처음이신가요? <strong>회원가입하기</strong>
        </span>
      </SignUpText>
    </Form>
  );
};

const SignUpText = styled(ActionText)`
  font-weight: normal;
  strong {
    font-weight: bold;
  }
`;

export default LoginForm;

import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = ({
  email,
  loginCode,
  login,
  goSignUpPage,
  sendCodeToEmail,
}) => {
  return (
    <Form onSubmit={login}>
      <Text>로그인</Text>
      <Input
        className="email"
        value={email.value}
        onChange={email.onChange}
        placeholder="이메일"
        required
      />
      <Request>
        <button onClick={sendCodeToEmail} type="button">
          코드 발송하기
        </button>
      </Request>

      <Input
        placeholder="로그인 코드"
        value={loginCode.value}
        onChange={loginCode.onChange}
      />

      <Button text="로그인" type="submit" />
      <SignUpText onClick={goSignUpPage}>
        <span>
          처음이신가요? <strong>회원가입하기</strong>
        </span>
      </SignUpText>
    </Form>
  );
};
export const Form = styled.form`
  text-align: center;
  max-width: 350px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input,
  select {
    margin-bottom: 20px;
    &.email {
      margin-bottom: 0;
    }
  }
  button {
    height: 35px;
  }
`;

export const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #6cd47f;
`;

export const ActionText = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: #459905;
  text-align: right;
  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUpText = styled(ActionText)`
  font-weight: normal;
  strong {
    font-weight: bold;
  }
`;

const Request = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    text-decoration: underline;
    background-color: #fff;
    color: #888888;
  }
`;

export default LoginForm;

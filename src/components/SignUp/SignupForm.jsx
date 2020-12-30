import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SignupForm = ({ email, name, nickname, bio, onSubmit, goLoginPage }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Text>회원가입</Text>
      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="이메일"
        required
      />
      <Input
        value={name.value}
        onChange={name.onChange}
        placeholder="이름"
        required
      />
      <Input
        value={nickname.value}
        onChange={nickname.onChange}
        placeholder="닉네임(최대 12자)"
        required
      />
      <Select value={bio.value} onChange={bio.onChange}>
        <option value="" disabled hidden>
          성별
        </option>
        <option value="m">남성</option>
        <option value="f">여성</option>
      </Select>
      <Button text="가입하기" />
      <ActionText onClick={goLoginPage}>
        <span>로그인하기</span>
      </ActionText>
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
    margin-bottom: 15px;
  }
  button {
    height: 35px;
  }
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  padding: 0 15px;
  font-size: 14px;
  font-family: inherit;
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

export default SignupForm;

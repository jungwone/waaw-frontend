import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SignupForm = ({ email, name, nickname, bio, onSubmit, setAction }) => {
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
        placeholder="닉네임(서비스 내에서 사용할 이름)"
        required
      />
      <Select value={bio.value} onChange={bio.onChange}>
        <option value="" selected disabled hidden>
          성별
        </option>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </Select>
      <Button text="가입하기" />
      <ActionText onClick={() => setAction("login")}>
        <span>로그인하기</span>
      </ActionText>
    </Form>
  );
};

export const Form = styled.form`
  text-align: center;
  max-width: 350px;
  width: 100%;
  height: 100%;
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

const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  padding: 0 15px;
  font-size: 14px;
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

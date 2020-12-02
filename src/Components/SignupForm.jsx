import React from "react";
import styled from "styled-components";
import Input from "./Input";

const SignupForm = ({ email, name, nickname, bio, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="email"
        required
      />
      <Input
        value={name.value}
        onChange={name.onChange}
        placeholder="name"
        required
      />
      <Input
        value={nickname.value}
        onChange={nickname.onChange}
        placeholder="Nick name"
        required
      />
      <select value={bio.value} onChange={bio.onChange}>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <button type="submit">완료</button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;

export default SignupForm;

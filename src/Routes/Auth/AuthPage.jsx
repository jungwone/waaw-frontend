import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../../Components/LoginForm";
import SignupForm from "../../Components/SignupForm";
import useInput from "../../Hooks/useInput";

const AuthPage = () => {
  const [action, setAction] = useState("signUp");
  const email = useInput("");
  const name = useInput("");
  const nickname = useInput("");
  const bio = useInput("m");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(bio.value);
  };

  return (
    <>
      {action === "login" && <LoginForm />}
      {action === "signUp" && (
        <SignupForm
          email={email}
          name={name}
          nickname={nickname}
          bio={bio}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default AuthPage;

import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;

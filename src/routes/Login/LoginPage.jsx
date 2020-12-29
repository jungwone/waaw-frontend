import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import { CONFIRM_LOGIN_CODE, LOCAL_LOGIN, REQUEST_LOGIN_CODE } from "./Queries";

const LoginPage = () => {
  const email = useInput("");
  const loginCode = useInput("");
  const history = useHistory();

  const [requestLoginCodeMutation] = useMutation(REQUEST_LOGIN_CODE);
  const [confirmLoginCodeMutation] = useMutation(CONFIRM_LOGIN_CODE);
  const [localLoginMutation] = useMutation(LOCAL_LOGIN);

  const goSignUpPage = () => {
    history.push("/signup");
  };

  const login = async (e) => {
    e.preventDefault();
    if (email.value === "" || loginCode.value === "") {
      toast.warning("입력하지 않은 항목이 있습니다.");
      return;
    }

    try {
      const {
        data: { confirmLoginCode: myInfo },
      } = await confirmLoginCodeMutation({
        variables: { email: email.value, loginCode: loginCode.value },
      });

      if (myInfo) {
        localLoginMutation({ variables: { myInfo } });
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const sendCodeToEmail = async () => {
    if (email.value === "") {
      toast.warning("이메일을 입력해주세요");
      return;
    }
    try {
      const {
        data: { requestLoginCode },
      } = await requestLoginCodeMutation({
        variables: { email: email.value },
      });
      if (requestLoginCode) {
        toast.success("메일이 발송되었습니다! 스팸메일함도 확인해주세요 😎");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <LoginForm
        email={email}
        loginCode={loginCode}
        login={login}
        sendCodeToEmail={sendCodeToEmail}
        goSignUpPage={goSignUpPage}
      />
    </>
  );
};

export default LoginPage;

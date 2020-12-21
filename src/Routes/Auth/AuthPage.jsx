import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import LoginForm from "../../Components/Login/LoginForm";
import SignupForm from "../../Components/SignUp/SignupForm";
import useInput from "../../Hooks/useInput";
import {
  CONFIRM_LOGIN_CODE,
  CREATE_ACCOUNT,
  LOCAL_LOGIN,
  REQUEST_LOGIN_CODE,
} from "./Queries";
import { toast } from "react-toastify";

const AuthPage = () => {
  const [action, setAction] = useState("login");
  const email = useInput("");
  const name = useInput("");
  const nickname = useInput("");
  const bio = useInput("");
  const loginCode = useInput("");
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const [requestLoginCodeMutation] = useMutation(REQUEST_LOGIN_CODE);
  const [confirmLoginCodeMutation] = useMutation(CONFIRM_LOGIN_CODE);
  const [localLoginMutation] = useMutation(LOCAL_LOGIN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "signUp") {
      if (
        email.value === "" ||
        name.value === "" ||
        nickname.value === "" ||
        bio.value === ""
      ) {
        toast.warning("선택하지 않은 항목이 있습니다!");
        return;
      }

      try {
        const {
          data: { createAccount },
        } = await createAccountMutation({
          variables: {
            email: email.value,
            name: name.value,
            nickname: nickname.value,
            bio: bio.value,
          },
        });
        if (createAccount) {
          toast.success("회원가입이 완료되었습니다!! 😘");
          name.setValue("");
          email.setValue("");
          bio.setValue("");
          setTimeout(() => setAction("login"), 2000);
        }
      } catch {
        toast.error("회원가입에 실패했습니다. 다시 시도해주세요");
      }
    } else if (action === "login") {
      if (email.value === "") {
        toast.warning("이메일을 입력해주세요 😉");
        return;
      }
      try {
        const {
          data: { requestLoginCode },
        } = await requestLoginCodeMutation({
          variables: { email: email.value },
        });
        if (requestLoginCode) {
          toast.success("메일이 발송되었습니다! 스팸메일함도 체크해주세요 😎");
          setAction("check");
        }
      } catch {
        toast.error("해당 이메일로 가입된 계정이 없습니다. 다시 확인해주세요");
      }
    } else if (action === "check") {
      if (email.value === "" || loginCode.value === "") {
        return;
      }
      try {
        const {
          data: { confirmLoginCode: token },
        } = await confirmLoginCodeMutation({
          variables: {
            email: email.value,
            loginCode: loginCode.value,
          },
        });

        if (token) {
          localLoginMutation({
            variables: { token },
          });
          window.location.href = "/";
        }
      } catch {
        toast.error(
          "메일로 발송된 로그인 코드와 일치하지 않습니다. 다시 확인해주세요"
        );
      }
    }
  };

  return (
    <>
      {(action === "login" || action === "check") && (
        <LoginForm
          email={email}
          action={action}
          setAction={setAction}
          loginCode={loginCode}
          onSubmit={onSubmit}
        />
      )}
      {action === "signUp" && (
        <SignupForm
          email={email}
          name={name}
          nickname={nickname}
          bio={bio}
          onSubmit={onSubmit}
          setAction={setAction}
        />
      )}
    </>
  );
};

export default AuthPage;

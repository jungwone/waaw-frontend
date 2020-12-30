import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import { CREATE_ACCOUNT } from "./Queries";
import SignupForm from "../../components/SignUp/SignupForm";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const email = useInput("");
  const name = useInput("");
  const nickname = useInput("");
  const bio = useInput("");
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const history = useHistory();

  const goLoginPage = () => {
    history.push("/login");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      email.value === "" ||
      name.value === "" ||
      nickname.value === "" ||
      bio.value === ""
    ) {
      toast.warning("입력하지 않은 항목이 있습니다. 다시 확인해주세요");
      return;
    }

    if (nickname.value.length > 12) {
      toast.warning("닉네임은 최대 12자 이내로 입력해주세요.");
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
        setTimeout(() => goLoginPage(), 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <SignupForm
        email={email}
        name={name}
        nickname={nickname}
        bio={bio}
        onSubmit={onSubmit}
        goLoginPage={goLoginPage}
      />
    </>
  );
};

export default SignUpPage;

import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import ImageUploadInput from "../Posting/ImageUploadInput";
import Input from "@material-ui/core/Input";
import Button from "../Button/Button";

const ProfileUpdateForm = ({
  user,
  fileUrl,
  onChangeFile,
  setNewPhoto,
  nickname,
  intro,
  onSubmit,
}) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Title>프로필 편집</Title>
      <Inner>
        <Row>
          <ImageUploadInput
            fileUrl={fileUrl}
            onChange={onChangeFile}
            setNewPhoto={setNewPhoto}
            avatar={user.avatar}
          />
        </Row>

        <Row>
          <Column>닉네임</Column>
          <div>
            <Input
              defaultValue={user.nickname}
              //   value={nickname.value}
              onChange={nickname.onChange}
              inputProps={{ "aria-label": "description" }}
            />
          </div>
        </Row>
        <Row className="intro">
          <Column>자기소개</Column>
          <TextArea
            minRows="5"
            defaultValue={user.intro}
            // value={intro.value}
            onChange={intro.onChange}
          />
        </Row>
      </Inner>
      <Row className="button">
        <Button text="수정하기" bgColor="#119100" />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 500px;

  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 30px;

  @media (max-width: 568px) {
    padding-top: 60px;
  }
`;

const Inner = styled.div`
  min-height: 400px;
  border: 1px solid lightgray;
  padding: 20px;
  @media (max-width: 568px) {
    padding: 10px;
    padding-left: 15px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-bottom: 50px;
  @media (max-width: 568px) {
    font-size: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &.intro {
    align-items: flex-start;
  }
  &.button {
    padding-top: 30px;
    button {
      width: 90px;
    }

    justify-content: center;
  }
`;

const Column = styled.div`
  width: 100px;
  font-size: 1rem;
`;

const TextArea = styled(TextareaAutosize)`
  max-width: 350px;
  width: 100%;
  resize: none;
  @media (max-width: 568px) {
    max-width: 230px;
  }
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

export default ProfileUpdateForm;

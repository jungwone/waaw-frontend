import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import TextareaAutoSize from "react-textarea-autosize";

const CommentWriteForm = ({ commentContent, onSubmitComment }) => {
  return (
    <Wrapper onSubmit={onSubmitComment}>
      <TextArea
        value={commentContent.value}
        onChange={commentContent.onChange}
        minRows={5}
        maxRows={40}
        placeholder="댓글을 입력해주세요. "
      />
      <ButtonWrap>
        <Button text="작성" bgColor="#119100" />
      </ButtonWrap>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 760px;
  margin: 0 auto;
  padding: 20px;
`;

const TextArea = styled(TextareaAutoSize)`
  font-family: "RIDIBatang";
  width: 100%;
  resize: none;
  padding: 20px;
  border: 1px solid lightgray;
  font-size: 14px;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }

  @media (max-width: 568px) {
    padding: 12px;
    font-size: 12px;
  }
`;

const ButtonWrap = styled.div`
  max-width: 50px;
  margin-left: auto;
`;

export default CommentWriteForm;

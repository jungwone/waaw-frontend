import React from "react";
import styled from "styled-components";
import TextareaAutoSize from "react-textarea-autosize";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Select } from "../SignUp/SignupForm";

const PostingForm = ({
  id,
  title,
  content,
  category,
  open,
  onChangeOpen,
  onFileChange,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Category>
        <Select value={category.value} onChange={category.onChange}>
          <option value="" disabled hidden>
            카테고리
          </option>
          <option value="POEM">시</option>
          <option value="NOVEL">소설</option>
          <option value="REVIEW">리뷰</option>
          <option value="FREE">자유로운 글</option>
          <option value="ESSAY">에세이</option>
          <option value="RELATIONSHIP">인간 관계</option>
        </Select>
      </Category>
      <Title placeholder="제목" value={title.value} onChange={title.onChange} />
      <TextArea
        value={content.value}
        onChange={content.onChange}
        minRows={20}
        maxRows={40}
        placeholder="글 쓰는 당신을 응원해요! 😊"
      />

      <OpenCheckBox>
        <div className="box">
          <input
            type="checkbox"
            className="toggle"
            value={open.value}
            onChange={onChangeOpen}
          />
          <div className="text">{open ? "공개" : "비공개"}</div>
        </div>
      </OpenCheckBox>
      <input type="file" onChange={onFileChange} accept="image/*" />
      <Button text="작성 완료" />
    </Form>
  );
};

const Form = styled.form`
  max-width: 650px;
  margin: auto;
  position: relative;
  top: 20px;
  padding-bottom: 20px;
`;

const Category = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled(Input)`
  &:focus {
    outline: none;
  }
  margin-bottom: 21px;
`;

const TextArea = styled(TextareaAutoSize)`
  width: 100%;
  resize: none;
  padding: 15px;
  margin-bottom: 1rem;
  border-radius: 4px;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
`;

const OpenCheckBox = styled.div`
  display: flex;

  .box {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .text {
      margin-left: 5px;
      width: 45px;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  .toggle {
    height: 25px;
    width: 50px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    border: 2px solid #474755;
    background-color: white;
    transition: all 0.2s ease;
    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: green;
      box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
      transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }
    &:checked {
      &:after {
        background: red;
        transform: translatex(20px);
      }
    }
  }
`;

export default PostingForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { s3url } from "../../config";
import styled from "styled-components";
import Input from "../../Components/Input/Input";
import useInput from "../../Hooks/useInput";
import Button from "../../Components/Button/Button";
import { Select } from "../../Components/SignUp/SignupForm";
import { useMutation } from "@apollo/react-hooks";
import { UPSERT_POST } from "./Queries";
import { toast } from "react-toastify";

const PostingPage3 = () => {
  const placeholder = "글 쓰는 당신을 응원합니다 🥰";
  const { quill, quillRef } = useQuill({
    placeholder,
  });
  const title = useInput("");
  const category = useInput("");
  const [open, setOpen] = useState(true);
  const [upsertPostMutation] = useMutation(UPSERT_POST);

  const onChangeOpen = () => {
    setOpen((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const content = quill.root.innerHTML;

    if (title.value === "" || content.length === "" || category.value === "") {
      toast.warning("입력하지 않은 항목이 있습니다. 다시 확인해주세요 :)");
      return;
    }

    try {
      const {
        data: { upsertPost },
      } = await upsertPostMutation({
        variables: {
          title: title.value,
          content,
          category: category.value,
          open,
          // fileUrl: s3FileKey,
        },
      });
      if (upsertPost) {
        console.log(upsertPost);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const insertToEditor = (key) => {
    const range = quill.getSelection();
    quill.insertEmbed(range.index + 1, "image", `${s3url}/photos/${key}`);
    quill.setSelection(range.index + 3);
  };

  const saveToServer = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const result = await axios.post(
      "http://localhost:4000/api/upload",
      formData,
      { headers: { "content-type": "multipart/form-data" } }
    );

    insertToEditor(result.data.key);
  };

  const selectLocalImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  };

  useEffect(() => {
    if (quill) {
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
    }
  }, [quill]);

  return (
    <Wrapper onSubmit={onSubmit}>
      <h2>글쓰기</h2>
      <CategorySelect
        value={category.value}
        onChange={category.onChange}
        required
      >
        <option value="" disabled hidden>
          카테고리
        </option>
        <option value="essay">자유주제 수필</option>
        <option value="review">리뷰(책, 영화)</option>
        <option value="dream">지난밤 꿈일기</option>
        <option value="poem">나만의 시</option>
      </CategorySelect>
      <Title
        placeholder="제목"
        value={title.value}
        onChange={title.onChange}
        required
      />
      <Editor>
        <div ref={quillRef} />
      </Editor>
      <OpenCheckBox>
        <div className="box">
          <input
            type="checkbox"
            className="toggle"
            value={open}
            onChange={onChangeOpen}
          />
          <div className="text">{open ? "공개" : "비공개"}</div>
        </div>
      </OpenCheckBox>
      <ButtonSection>
        <Button text="작성" height={"40"} bgColor={"#119100"} />
      </ButtonSection>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 100px 10px 100px 10px;
  max-width: 800px;
  margin: 0 auto;
  h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 45px;
  }
`;

const Title = styled(Input)`
  font-size: 20px;
  height: 50px;
  &:focus {
    outline: none;
  }
  margin-bottom: 40px;
  @media (max-width: 568px) {
    height: 40px;
    font-size: 16px;
  }
`;

const Editor = styled.div`
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
  padding-bottom: 30px;
  .ql-container {
    height: 500px;
    /* font-family: "SDMiSaeng"; */
    font-size: 16px;
  }
`;

const ButtonSection = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const CategorySelect = styled(Select)`
  display: flex;
  margin-right: auto;
  width: 200px;
  height: 45px;
  font-size: 16px;
  margin-bottom: 30px;
  @media (max-width: 568px) {
    width: 180px;
    height: 40px;
    font-size: 14px;
    margin-bottom: 20px;
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

export default PostingPage3;

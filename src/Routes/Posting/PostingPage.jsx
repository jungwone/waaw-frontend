import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import PostingForm from "../../Components/Posting/PostingForm";
import useInput from "../../Hooks/useInput";
import { UPSERT_POST } from "./Queries";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

const PostingPage = () => {
  const id = useInput(0);
  const title = useInput("");
  const content = useInput("");
  const category = useInput("");
  const [open, setOpen] = useState(true);
  const fileUrl = useInput("");
  const [file, setFile] = useState();
  const history = useHistory();
  const [upsertPostMutation] = useMutation(UPSERT_POST);

  const onFileChange = (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    let myFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile);

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      fileUrl.setValue(result);
    };
    setFile(myFile);
  };

  const onChangeOpen = () => {
    setOpen((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      "http://localhost:4000/api/upload",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return;

    if (title.value === "" || content.value === "" || category.value === "") {
      toast.warning("입력하지 않은 항목이 있습니다. 다시 확인해주세요 :)");
      return;
    }
    try {
      const {
        data: { upsertPost },
      } = await upsertPostMutation({
        variables: {
          title: title.value,
          content: content.value,
          category: category.value,
          open,
        },
      });
      if (upsertPost) {
        toast.success("성공적으로 등록되었습니다. 😉");
        history.goBack();
      }
    } catch {
      toast.error("서버 요청에 실패했습니다. 😥");
    }
  };
  return (
    <>
      <PostingForm
        id={id}
        title={title}
        content={content}
        category={category}
        open={open}
        onChangeOpen={onChangeOpen}
        onFileChange={onFileChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default PostingPage;

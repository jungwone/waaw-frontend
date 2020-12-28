import React, { useCallback, useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { s3url } from "../../config";
import useInput from "../../hooks/useInput";
import Button from "../../components/Button/Button";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { imageUploadToServer } from "../../service";
import { CloseIcon } from "../../components/Icons/Icons";
import {
  Wrapper,
  CategorySelect,
  Title,
  Editor,
  Thumbnail,
  OpenCheckBox,
  ButtonSection,
} from "../Posting/PostingPage";
import { UPDATE_POST } from "./Queries";

const PostUpdatePage = ({ post }) => {
  console.log(post);
  const placeholder = "글 쓰는 당신을 응원합니다 🥰";
  const { quill, quillRef } = useQuill({ placeholder });

  const title = useInput(post.title);
  const category = useInput(post.category);
  const [open, setOpen] = useState(post.open);
  const [thumbnail, setThumbnail] = useState(new File([], `${post.thumbnail}`));
  const [isThumbnailChanged, setIsThumbnailChanged] = useState(false);
  const [updatePostMutation] = useMutation(UPDATE_POST);

  const onChangeOpen = () => {
    setOpen((prev) => !prev);
  };

  const onChangeThumbnail = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    setThumbnail(file);
    setIsThumbnailChanged(true);
  };

  const removeThumbnail = () => {
    setThumbnail();
    setIsThumbnailChanged(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const content = quill.root.innerHTML;
    let thumbnailUrl = "";

    if (title.value === "" || content.length === "" || category.value === "") {
      toast.warning("입력하지 않은 항목이 있습니다. 다시 확인해주세요 :)");
      return;
    }

    if (thumbnail && isThumbnailChanged) {
      thumbnailUrl = await imageUploadToServer(thumbnail);
    }
    console.log(post.uuid);

    try {
      const {
        data: { updatePost },
      } = await updatePostMutation({
        variables: {
          postId: post.uuid,
          title: title.value,
          content,
          category: category.value,
          open,
          thumbnail: isThumbnailChanged ? thumbnailUrl : thumbnail.name,
        },
      });
      if (updatePost) {
        toast.success("포스트가 성공적으로 등록되었습니다.");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const insertToEditor = useCallback(
    (key) => {
      const range = quill.getSelection();
      quill.insertEmbed(range.index + 1, "image", `${s3url}/photos/${key}`);
      quill.setSelection(range.index + 3);
    },
    [quill]
  );

  const saveToServer = useCallback(
    async (file) => {
      const imageKey = await imageUploadToServer(file);
      insertToEditor(imageKey);
    },
    [insertToEditor]
  );

  const selectLocalImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  }, [saveToServer]);

  useEffect(() => {
    if (quill) {
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
      quill.root.innerHTML = post.content;
    }
  }, [quill, selectLocalImage, post]);

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
      <Thumbnail>
        <span>
          {thumbnail && thumbnail.name}
          {thumbnail.name !== "" && (
            <button onClick={removeThumbnail}>
              <CloseIcon />
            </button>
          )}
        </span>
        <label htmlFor="thumbnail">썸네일 업로드</label>
        <input type="file" id="thumbnail" onChange={onChangeThumbnail} />
      </Thumbnail>
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
        <Button text="수정" height={"40"} bgColor={"#119100"} />
      </ButtonSection>
    </Wrapper>
  );
};

export default PostUpdatePage;

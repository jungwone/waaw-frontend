import React, { useState, useCallback } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { UPDATE_USER, USER_QUERY } from "./Queries";
import useInput from "../../hooks/useInput";
import ProfileUpdateForm from "../../components/Profile/ProfileUpdateForm";
import { imageUploadToServer } from "../../service";
import { toast } from "react-toastify";

const ProfileUpdatePage = () => {
  const { uuid } = useParams();
  const { data, loading } = useQuery(USER_QUERY, {
    variables: {
      userId: uuid,
    },
  });

  const [updateUserMutation] = useMutation(UPDATE_USER);

  const [newPhoto, setNewPhoto] = useState();
  const fileUrl = useInput("");
  const intro = useInput("");
  const nickname = useInput("");

  const onChangeFile = useCallback(
    (e) => {
      if (e.target.files.length === 0) {
        return;
      }
      const file = e.target.files[0];
      setNewPhoto(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        } = finishedEvent;
        fileUrl.setValue(result);
      };
    },
    [fileUrl]
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    let imageKey = "";
    if (newPhoto) {
      imageKey = await imageUploadToServer(newPhoto);
    }

    try {
      await updateUserMutation({
        variables: {
          userId: uuid,
          avatar: imageKey !== "" ? imageKey : data.findUser.avatar,
          intro: intro.value !== "" ? intro.value : data.findUser.intro,
          nickname: nickname.value,
        },
      });
      toast.success("프로필을 수정했습니다.");
      window.location.href = `/profile/${data.findUser.uuid}`;
    } catch (error) {
      toast.error("요청에 실패했습니다.");
    }
  };

  return (
    <>
      {!loading && data && data.findUser && (
        <>
          <ProfileUpdateForm
            user={data.findUser}
            onSubmit={onSubmit}
            fileUrl={fileUrl}
            onChangeFile={onChangeFile}
            intro={intro}
            nickname={nickname}
            setNewPhoto={setNewPhoto}
          />
        </>
      )}
    </>
  );
};

export default ProfileUpdatePage;

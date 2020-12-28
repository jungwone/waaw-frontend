import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";
import ProfileBox from "../../components/Profile/ProfileBox";
import { UserContext } from "../../context/UserContext";
import { USER_QUERY } from "./Queries";

const ProfilePage = () => {
  const { uuid } = useParams(); // user uuid
  const myInfo = useContext(UserContext);
  const history = useHistory();

  const onClickProfileUpdate = () => {
    history.push(`/updateProfile/${uuid}`);
  };

  const { data, loading } = useQuery(USER_QUERY, {
    variables: {
      userId: uuid,
    },
  });

  return (
    <>
      {!loading && data && data.findUser && (
        <ProfileBox
          user={data.findUser}
          isMe={myInfo && myInfo.uuid === data.findUser.uuid}
          onClickProfileUpdate={onClickProfileUpdate}
        />
      )}
    </>
  );
};

export default ProfilePage;

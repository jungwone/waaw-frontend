import React from "react";
import styled from "styled-components";
import { s3url } from "../../config";

import Button from "../../components/Button/Button";
import UserAvatar from "../UserAvatar/UserAvatar";

const ProfileBox = ({ user, isMe, onClickProfileUpdate }) => {
  return (
    <Wrapper>
      <ImageSection>
        <UserAvatar
          src={
            user.avatar
              ? `${s3url}/photos/${user.avatar}`
              : `${s3url}/smiley.png`
          }
          size="large"
        />
      </ImageSection>
      <Section className="info">
        <Row className="nickname">
          {user.nickname.substring(0, 15)}
          {isMe && <Button text="프로필 편집" onClick={onClickProfileUpdate} />}
        </Row>
        <Row>게시물 개수 00개</Row>
        <Row className="intro">
          {user.intro ? user.intro : "자기소개를 작성하지 않았습니다."}
        </Row>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid gray;
  display: flex;
  padding: 10px;
`;

const ImageSection = styled.section`
  flex: 1;
  width: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
  }
`;
const Section = styled.section`
  flex: 3;
  padding-left: 25px;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 568px) {
    padding-left: 12px;
  }
`;

const Row = styled.div`
  padding-bottom: 15px;

  &.nickname {
    display: flex;
    align-items: center;
    button {
      height: 35px;
      margin-left: 30px;
      max-width: 100px;
      font-weight: normal;
      background-color: ${(props) => props.theme.mainGreen};
    }
    @media (max-width: 568px) {
      width: 80px;
      font-size: 12px;
      padding-bottom: 8px;
    }
  }

  @media (max-width: 568px) {
    font-size: 12px;
    padding-bottom: 8px;
  }
`;

export default ProfileBox;

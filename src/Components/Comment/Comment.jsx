import React from "react";
import styled from "styled-components";
import { s3url } from "../../config";
import UserImage from "../UserImage/UserImage";

const Comment = ({ comment }) => {
  return (
    <Wrapper>
      <UserImage size="small" src={`${s3url}/smiley.png`}>
        이미지
      </UserImage>
      <TextInfo>
        <div className="info-1">
          <span className="username">유저 이름</span>
          <span className="date">댓글 생성 날짜</span>
        </div>
        <p className="info-2">
          댓글 내용 댓글내용댓글 내용 댓글내용댓글 내용 댓글내용 댓글 내용
          댓글내용 댓글 내용 댓글내용 댓글 내용 댓글내용
        </p>
      </TextInfo>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  padding: 20px 10px;
  border-bottom: 1px solid lightgray;
`;
const TextInfo = styled.div`
  margin-left: 15px;
  .info-1 {
    padding: 0px 0px 15px 0px;
    font-size: 13px;

    .username {
      padding-right: 20px;
    }
    .date {
      color: #888888;
    }
  }

  .info-2 {
    line-height: 1.3;
  }
`;

export default Comment;

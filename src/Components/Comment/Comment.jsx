import React from "react";
import styled from "styled-components";
import { s3url } from "../../config";
import UserImage from "../UserImage/UserImage";
import moment from "moment";

const Comment = ({ comment }) => {
  const { user } = comment;
  return (
    <Wrapper>
      <UserImage
        size="small"
        src={user.avatar ? `${s3url}/${user.avatar}` : `${s3url}/smiley.png`}
      >
        이미지
      </UserImage>
      <TextInfo>
        <div className="info-1">
          <span className="username">{user.nickname}</span>
          <span className="date">
            {moment(Number(comment.createdAt)).format("YYYY.MM.DD. H:mm")}
          </span>
        </div>
        <pre className="info-2">{comment.content}</pre>
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
    font-size: 12px;

    .username {
      font-size: 12px;
      padding-right: 20px;
      color: gray;
    }
    .date {
      color: #888888;
    }
  }

  .info-2 {
    line-height: 1.3;
    color: #222222;
    white-space: pre;
  }
  @media (max-width: 568px) {
    .info-2 {
      font-size: 13px;
    }
  }
`;

export default Comment;

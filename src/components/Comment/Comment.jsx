import React from "react";
import styled from "styled-components";
import { s3url } from "../../config";

import moment from "moment";
import UserAvatar from "../UserAvatar/UserAvatar";

const Comment = ({ comment, myInfo, deleteComment }) => {
  const { user } = comment;
  return (
    <Wrapper>
      <UserAvatar
        size="small"
        src={
          user.avatar ? `${s3url}/photos/${user.avatar}` : `${s3url}/smiley.png`
        }
      >
        이미지
      </UserAvatar>
      <TextInfo>
        <div className="info-1">
          <span className="username">{user.nickname}</span>
          <span className="date">
            {moment(Number(comment.createdAt)).format("YYYY.MM.DD. H:mm")}
          </span>
          {myInfo && myInfo.uuid === user.uuid && (
            <button
              className="delete-btn"
              onClick={() => deleteComment(comment.uuid)}
            >
              삭제
            </button>
          )}
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
  @media (max-width: 568px) {
    padding: 15px 5px;
  }
`;
const TextInfo = styled.div`
  margin-left: 15px;
  .info-1 {
    padding: 0px 0px 15px 0px;
    font-size: 12px;

    .username {
      padding-right: 20px;
      color: gray;
    }
    .date {
      color: #888888;
    }
    .delete-btn {
      cursor: pointer;
      outline: none;
      border: none;
      font-size: 12px;
      color: #888888;
      background-color: #fff;
      &:hover {
        color: ${(props) => props.theme.mainGreen};
      }
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

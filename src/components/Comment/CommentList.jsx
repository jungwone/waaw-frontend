import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = ({
  commentData,
  getMoreComments,
  hasMoreComment,
  newComment,
  myInfo,
  deleteComment,
}) => {
  return (
    <Wrapper>
      {commentData && (
        <>
          <ul>
            {commentData.map((comment) => (
              <Comment
                key={comment.uuid}
                comment={comment}
                myInfo={myInfo}
                deleteComment={deleteComment}
              />
            ))}
            {newComment &&
              newComment.length > 0 &&
              newComment.map((comment) => (
                <Comment
                  key={comment.uuid}
                  comment={comment}
                  myInfo={myInfo}
                  deleteComment={deleteComment}
                />
              ))}
          </ul>
          {hasMoreComment && (
            <MoreButton>
              <button onClick={getMoreComments}>댓글 더 불러오기</button>
            </MoreButton>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  ul {
    border-top: 1px solid #888888;

    padding: 20px 20px 10px 20px;
  }
`;

const MoreButton = styled.div`
  padding-left: 20px;
  height: 30px;

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #fff;
    width: 100%;
    height: 100%;
    color: #888888;
  }
`;

export default CommentList;

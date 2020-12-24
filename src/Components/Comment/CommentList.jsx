import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <Wrapper>
      <ul>
        <Comment />
        <Comment />
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 20px 130px 20px;
  border-top: 1px solid #888888;
  border-bottom: 1px solid #888888;
`;

export default CommentList;

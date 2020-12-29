import React from "react";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <Wrapper>
      <Inner>
        <h1>공지사항</h1>
        <p>아직 계속 개발 진행중입니다.</p>
        <p>취업을 준비하면서 만든 프로젝트라 많이 미흡합니다. 😥😥</p>
        <p>크롬에 최적화 되어있으며 일부 기능에 에러가 있을 수 있습니다.</p>
        <p>
          질문이나 문의사항이 있으시면 아래 메일로 연락주시면 감사하겠습니다.
        </p>
        <p>jungwon.wk@gmail.com</p>
      </Inner>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 160px;
`;

const Inner = styled.div`
  text-align: center;
  font-size: 16px;

  h1 {
    font-size: 24px;
    margin-bottom: 50px;
  }

  p {
    line-height: 1.5;
    color: #333333;
    margin-bottom: 15px;
  }
`;
export default NoticePage;

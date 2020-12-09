import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Link to="/">WAAW</Link>
      </div>

      <ul>
        <li>
          <Link to="/posting">글쓰기</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

export const HeaderStyle = styled.nav`
  height: ${(props) => props.theme.headerHeight};
  border: 1px solid gray;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  ul {
    margin-left: auto;
  }
  li {
    float: left;
    margin-right: 20px;
  }
`;

export default Header;

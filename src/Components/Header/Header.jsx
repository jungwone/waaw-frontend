import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfileIcon, WritingIcon } from "../Icons/Icons";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo>
        <LogoText to="/">글의 집</LogoText>
      </Logo>

      <ul>
        <li>
          <Link to="/posting">
            <WritingIcon />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <ProfileIcon />
          </Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.nav`
  height: ${(props) => props.theme.headerHeight};
  border: 1px solid gray;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  padding: 0 30px;
  ul {
    margin-left: auto;
  }
  li {
    float: left;
    margin-left: 25px;
  }
`;
const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const LogoText = styled(Link)`
  text-decoration: none;
  font-family: "Single Day";
  font-size: 40px;
  color: #000;
  @media (max-width: 568px) {
    font-size: 25px;
  }
`;

export default Header;

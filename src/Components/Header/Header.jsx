import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfileIcon, WritingIcon } from "../Icons/Icons";

const Header = () => {
  return (
    <HeaderStyle>
      <InnerStyle>
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
      </InnerStyle>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.nav`
  height: ${(props) => props.theme.headerHeight};
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 3;
  box-shadow: 5px 1px 10px #adb5bd;
  padding: 0 30px;

  ul {
    margin-left: auto;
  }
  li {
    float: left;
    margin-left: 25px;
  }
`;

const InnerStyle = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
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

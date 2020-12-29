import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  CloseIcon,
  HamburgerIcon,
  ProfileIcon,
  WritingIcon,
} from "../Icons/Icons";
import Dropdown from "./Dropdown";
import Button from "../Button/Button";

const Header = ({ isLoggedIn, logout, myInfo }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const history = useHistory();

  const goLoginPage = useCallback(() => {
    history.push("/login");
    setClick(false);
  }, [history]);

  const goSignUpPage = useCallback(() => {
    history.push("/signup");
    setClick(false);
  }, [history]);

  return (
    <>
      <HeaderStyle>
        <InnerStyle>
          <Logo onClick={closeMobileMenu}>
            <LogoText to="/">글의 집</LogoText>
          </Logo>

          <MyMenu>
            {isLoggedIn ? (
              <>
                <BarListItem>
                  <Link to="/posting">
                    <WritingIcon />
                  </Link>
                </BarListItem>
                <BarListItem>
                  <Link to={`/profile/${myInfo ? myInfo.uuid : ""}`}>
                    <ProfileIcon />
                  </Link>
                </BarListItem>
                <BarListItem>
                  <Button text="로그아웃" bgColor="#119100" onClick={logout} />
                </BarListItem>
              </>
            ) : (
              <>
                <BarListItem>
                  <Button
                    text="로그인"
                    bgColor="#119100"
                    onClick={goLoginPage}
                  />
                </BarListItem>
                <BarListItem>
                  <Button
                    text="회원가입"
                    bgColor="#119100"
                    onClick={goSignUpPage}
                  />
                </BarListItem>
              </>
            )}
          </MyMenu>

          <BarIcon onClick={handleClick}>
            {!click ? (
              <button>
                <HamburgerIcon />
              </button>
            ) : (
              <button>
                <CloseIcon />
              </button>
            )}
          </BarIcon>
        </InnerStyle>
        <Dropdown
          className={click ? `visible` : `hide`}
          closeMobileMenu={closeMobileMenu}
          myInfo={myInfo}
          isLoggedIn={isLoggedIn}
          goLoginPage={goLoginPage}
          goSignUpPage={goSignUpPage}
          logout={logout}
        />
      </HeaderStyle>
    </>
  );
};

const BarIcon = styled.div`
  margin-left: auto;
  display: none;
  @media (max-width: 568px) {
    display: block;
  }
  button {
    cursor: pointer;
    outline: none;
    border: 0;
    background-color: inherit;
  }
`;

const MyMenu = styled.ul`
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    position: relative;
    top: 2px;
    right: 2px;
    padding-top: 3px;
  }

  @media (max-width: 568px) {
    display: none;
  }
`;
const BarListItem = styled.li`
  float: left;
  margin-left: 25px;
  font-size: 20px;

  button {
    font-weight: normal;
  }

  &:hover {
    a {
      color: skyblue;
    }
    svg {
      fill: skyblue;
    }
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderStyle = styled.nav`
  height: ${(props) => props.theme.headerHeight};
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 5;
  box-shadow: 5px 1px 10px #adb5bd;

  a {
    text-decoration: none;
    font-family: "Single Day";
    color: #000;
  }
`;

const InnerStyle = styled.div`
  max-width: 1600px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const LogoText = styled(Link)`
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export default Header;

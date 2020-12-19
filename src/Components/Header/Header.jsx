import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "../Icons/Icons";
import { categories } from "./Menus";
import Dropdown from "./Dropdown";

const Header = ({ isLoggedIn }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <HeaderStyle>
        <InnerStyle>
          <Logo>
            <LogoText to="/">글의 집</LogoText>
          </Logo>
          <MenuList>
            <CategoryMenu>
              {categories.map((category) => (
                <Link key={category.id} to={`/room/${category.id}`}>
                  <BarListItem>
                    <span>{category.name}</span>
                  </BarListItem>
                </Link>
              ))}
            </CategoryMenu>

            <MyMenu>
              <BarListItem>
                <Link to="/posting">글쓰기</Link>
              </BarListItem>
              <BarListItem>
                <Link to="/profile">내 정보</Link>
              </BarListItem>
            </MyMenu>
          </MenuList>
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

const MenuList = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 568px) {
    display: none;
  }
`;

const CategoryMenu = styled.ul`
  margin: 0 auto;
`;

const MyMenu = styled.ul``;
const BarListItem = styled.li`
  float: left;
  margin-left: 25px;
  font-size: 25px;
  &:hover {
    a {
      color: skyblue;
    }
  }
  @media (max-width: 768px) {
    font-size: 20px;
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
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export default Header;

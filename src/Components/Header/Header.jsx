import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "../Icons/Icons";
import { myMenu } from "./Menus";
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
          {/* <CategoryMenu>
            {categories.map((category) => (
              <BarListItem key={category.id}>
                <Link to={`/board?category=${category.id}`}>
                  {category.s_name}
                </Link>
              </BarListItem>
            ))}
          </CategoryMenu> */}

          <MyMenu>
            {myMenu.map((menu) => (
              <BarListItem key={menu.id}>
                <Link to={`/${menu.id}`}>{menu.icon}</Link>
              </BarListItem>
            ))}
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

// const CategoryMenu = styled.ul`
//   margin: 0 auto;
//   display: flex;
//   @media (max-width: 568px) {
//     display: none;
//   }
// `;

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

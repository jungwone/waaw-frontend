import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./Menus";
import styled from "styled-components";
import { ProfileIcon, WritingIcon } from "../Icons/Icons";

const Dropdown = ({
  closeMobileMenu,
  myInfo,
  className,
  logout,
  isLoggedIn,
  goLoginPage,
  goSignUpPage,
}) => {
  return (
    <Wrapper className={className}>
      <ul>
        {categories.map((category) => (
          <Link key={category.id} to={`/board/${category.id}`}>
            <li onClick={closeMobileMenu}>
              <Icon className={`${category.id}`}>{category.icon}</Icon>
              <span className={category.id}>{category.name}</span>
            </li>
          </Link>
        ))}
        {isLoggedIn && (
          <>
            <Link to={"/posting"}>
              <li onClick={closeMobileMenu}>
                <Icon className="posting">
                  <WritingIcon />
                </Icon>
                <span>글쓰기</span>
              </li>
            </Link>
            <Link to={`/profile/${myInfo ? myInfo.uuid : ""}`}>
              <li onClick={closeMobileMenu}>
                <Icon className="profile">
                  <ProfileIcon />
                </Icon>
                <span>내 정보</span>
              </li>
            </Link>
          </>
        )}

        {isLoggedIn ? (
          <li onClick={logout}>
            <span className="logout">로그아웃</span>
          </li>
        ) : (
          <>
            <li onClick={goLoginPage}>
              <span className="logout">로그인</span>
            </li>
            <li onClick={goSignUpPage}>
              <span className="logout">회원가입</span>
            </li>
          </>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  top: 70px;
  background-color: #1c1f24;
  transition: all 0.3s ease;

  li {
    cursor: pointer;
    float: unset;
    padding: 13px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s linear;

    .logout {
      font-family: "Single Day";
    }

    &:hover {
      background-color: #333333;
      span {
        transition: all 0.3s linear;
        &.essay {
          color: #fa66a6;
        }
        &.poem {
          color: #f0df2b;
        }
        &.dream {
          color: #ff7142;
        }
        &.review {
          color: #42b3ff;
        }
      }
    }
  }

  span {
    color: #fff;
  }

  &.hide {
    transform: translateX(-100vw);
  }
  @media (min-width: 568px) {
    transform: translateX(-100vw);
  }
`;

const Icon = styled.figure`
  margin-left: -20px;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
    /* fill: #f0df2b; */

    fill: #fff;
  }
  &.poem {
    svg {
      fill: #f0df2b;
    }
  }
  &.dream {
    svg {
      fill: #ff7142;
    }
  }
  &.essay {
    svg {
      fill: #fa66a6;
    }
  }

  &.review {
    svg {
      fill: #42b3ff;
    }
  }
`;

export default Dropdown;

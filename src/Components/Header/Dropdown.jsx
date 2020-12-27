import React from "react";
import { Link } from "react-router-dom";
import { categories, myMenu } from "./Menus";
import styled from "styled-components";

const Dropdown = ({ closeMobileMenu, className, logout }) => {
  return (
    <Wrapper className={className}>
      <ul>
        {categories.map((category) => (
          <Link key={category.id} to={`/room/${category.id}`}>
            <li onClick={closeMobileMenu}>
              <Icon className={`${category.id}`}>{category.icon}</Icon>
              <span className={category.id}>{category.name}</span>
            </li>
          </Link>
        ))}
        {myMenu.map((menu) => (
          <Link key={menu.id} to={`/${menu.id}`}>
            <li onClick={closeMobileMenu}>
              <Icon className={`${menu.id}`}>{menu.icon}</Icon>
              <span>{menu.name}</span>
            </li>
          </Link>
        ))}
        <li>
          <span className="logout" onClick={logout}>
            로그아웃
          </span>
        </li>
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
    padding: 15px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 26px;
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
    width: 30px;
    height: 30px;
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

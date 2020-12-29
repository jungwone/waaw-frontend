import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>글의집</Logo>
      <List>
        <Link to="/notice">
          <ListItem>공지사항</ListItem>
        </Link>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #575757;
  color: #fff;
  padding: 30px;
  min-height: 120px;
  @media (max-width: 568px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 1.3rem;
`;
const List = styled.ul`
  padding-top: 20px;
  max-width: 100px;
`;
const ListItem = styled.li`
  font-size: 13px;
  color: #fff;
`;

export default Footer;

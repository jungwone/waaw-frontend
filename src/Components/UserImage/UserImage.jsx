import React from "react";
import styled from "styled-components";

const UserImage = ({ src, size, alt }) => {
  return (
    <Wrapper size={size}>
      <UserImageStyle src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const UserImageStyle = styled.img`
  width: 100%;
  height: auto;
`;

export default UserImage;

import React from "react";
import styled from "styled-components";

const UserImage = ({ src, size, alt }) => {
  return (
    <Wrapper>
      <UserImageStyle src={src} alt={alt} className={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 50%;
`;

const UserImageStyle = styled.img`
  width: 100%;
  height: auto;
  max-width: 80px;
  max-height: 80px;
  &.medium {
    width: 50px;
    height: 50px;
  }
  &.small {
    width: 30px;
    height: 30px;
  }
`;

export default UserImage;

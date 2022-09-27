import React from "react";
import styled from "styled-components";

const StyledImage = styled.img``;

const GreyMask = styled.div`
  background-color: rgba(30, 30, 30, 0.5);
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

const BackgroundContainer = styled.div``;

const BackgroundImage = (props) => {
  return (
    <BackgroundContainer>
      <StyledImage src={props.src} alt={props.alt} />
      {props.isMasked && <GreyMask />}
    </BackgroundContainer>
  );
};

export default BackgroundImage;

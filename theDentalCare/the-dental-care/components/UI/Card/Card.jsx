import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 100px;
  background-color: #0288d1;
  border-radius: 15px;
`;

const Card = (props) => {
  return <StyledDiv className={props.className}>{props.children}</StyledDiv>;
};

export default Card;

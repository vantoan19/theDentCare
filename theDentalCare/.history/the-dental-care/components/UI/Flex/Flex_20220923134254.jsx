import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

const Flex = (props) => {
  return <FlexDiv className={props.className}>{props.children}</FlexDiv>;
};

export default Flex;

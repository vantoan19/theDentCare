import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    padding: 15px;
    border-radius: 30px;
    color: #fff;
    background-color: #03A9F4;
    cursor: pointer;
`

const Button = (props) => {
  return (
    <StyledButton onClick={props.action} className={props.className}>
        {props.children}
    </StyledButton>
  )
}

export default Button
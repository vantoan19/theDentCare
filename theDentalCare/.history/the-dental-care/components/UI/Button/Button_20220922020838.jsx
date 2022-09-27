import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
`

const Button = (props) => {
  return (
    <StyledButton onClick={props.action}>
        {props.children}
    </StyledButton>
  )
}

export default Button
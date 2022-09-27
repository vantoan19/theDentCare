import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    cursor: pointer;
    margin: 0px 20px;
    font-size: 1.8rem;
`

const NavItem = (props) => {
    return (
      <StyledSpan className='nav-item'>{props.children}</StyledSpan>
    )
}

export default NavItem
import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    cursor: pointer;
    margin: 0px 20px;
    font-size: 2rem;
    font-weight: 300;
    color: #fff;
`

const NavItem = (props) => {
    return (
      <StyledSpan className='nav-item'>{props.children}</StyledSpan>
    )
}

export default NavItem
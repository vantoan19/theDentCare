import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    cursor: pointer;
`

const NavItem = (props) => {
    return (
      <StyledSpan className='nav-item'>{props.children}</StyledSpan>
    )
}

export default NavItem
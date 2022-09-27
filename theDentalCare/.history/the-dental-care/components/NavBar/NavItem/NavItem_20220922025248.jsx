import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.a`
    cursor: pointer;
    margin: 0px 20px;
    font-size: 2rem;
    font-weight: 300;
    color: #fff;
`

const NavItem = (props) => {
    return (
      <StyledAnchor>{props.children}</StyledAnchor>
    )
}

export default NavItem
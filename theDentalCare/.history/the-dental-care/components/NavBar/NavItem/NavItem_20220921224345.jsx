import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    cursor: pointer
`

const NavItem = (props) => {
    return (
      <span className='nav-item'>{props.children}</span>
    )
}

export default NavItem
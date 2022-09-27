import React from 'react'
import styled from 'styled-components'
import Logo from './Logo/Logo'
import NavItem from './NavItem/NavItem'

const NavContainer = styled.div`
    background-color: #03A9F4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const NavItemsGroup = styled.span`

`

const NavBar = () => {
  return (
    <NavContainer>
        <Logo/>
        <NavItemsGroup>
            <NavItem>Giới thiệu</NavItem>
            <NavItem>Tin tức</NavItem>
            <NavItem>Kiến thức</NavItem>
            <NavItem>Liên hệ</NavItem>
        </NavItemsGroup>
    </NavContainer>
  )
}

export default NavBar
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo/Logo'
import NavItem from './NavItem/NavItem'

const NavContainer = styled.div`
  background-color: #03A9F4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const NavItemsGroup = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
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
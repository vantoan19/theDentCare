import React from 'react'
import styled from 'styled-components'
import Logo from './Logo/Logo'
import NavItem from './NavItem/NavItem'

const LogoContainer = styled.div`
    margin: 0 100px;
`

const NavContainer = styled.div`
  background-color: #03A9F4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavItemsGroup = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin: 0 100px;
`

const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
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
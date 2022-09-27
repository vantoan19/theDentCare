import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from './Logo/Logo'
import NavItem from './NavItem/NavItem'

const LogoContainer = styled.div`
  margin: 0 150px;
`

const NavItemsGroup = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  margin: 0 150px;
`

const StyledAnchor = styled.a`
  text-decoration: none;
`

const NavContainer = styled.nav`
  background-color: #03A9F4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 1px #B3E5FC;
  margin-bottom: 1px;
`

const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <NavItemsGroup>
        <Link href='/about'>
          <NavItem>Giới thiệu</NavItem>
        </Link>
        <Link href='/news'>
          <NavItem>Tin tức</NavItem>
        </Link>
        <Link href='/knowledge'>
          <NavItem>Kiến thức</NavItem>
        </Link>
        <Link href='/contact'>
          <NavItem>Liên hệ</NavItem>
        </Link>
      </NavItemsGroup>
    </NavContainer>
  )
}

export default NavBar
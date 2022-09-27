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
          <StyledAnchor>
            <NavItem>Giới thiệu</NavItem>
          </StyledAnchor>
        </Link>
        <Link href='/news'>
          <StyledAnchor>
            <NavItem>Tin tức</NavItem>
          </StyledAnchor>
        </Link>
        <Link href='/about'>
          <StyledAnchor>
            <NavItem>Kiến thức</NavItem>
          </StyledAnchor>
        </Link>
        <Link href='/about'>
          <StyledAnchor>
            <NavItem>Liên hệ</NavItem>
          </StyledAnchor>
        </Link>
      </NavItemsGroup>
    </NavContainer>
  )
}

export default NavBar
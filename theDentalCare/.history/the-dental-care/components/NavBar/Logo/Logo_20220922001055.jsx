import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
    margin: 0 50px;
`

const StyledLogo = styled.img`
  width: 140px;
`

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo src='/theDentCare.svg'/>
    </LogoContainer>
  )
}

export default Logo
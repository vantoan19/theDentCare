import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.span`
    
`

const StyledLogo = styled.img`
  width: 150px;
`

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo src='/theDentCare.svg'/>
    </LogoContainer>
  )
}

export default Logo
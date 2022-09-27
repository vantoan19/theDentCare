import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.span`
    
`

const StyledLogo = styled.img`

`

const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo src='/theDentCare.svg'/>
    </LogoContainer>
  )
}

export default Logo
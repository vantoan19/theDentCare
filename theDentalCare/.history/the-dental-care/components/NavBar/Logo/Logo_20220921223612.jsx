import React from 'react'
import styled from 'styled-components'
import logo from '../../../public/theDentCare.svg'

const StyledLogo = styled.img`
    
`

const Logo = () => {
  return (
    <StyledLogo src={logo} alt="web logo" />
  )
}

export default Logo
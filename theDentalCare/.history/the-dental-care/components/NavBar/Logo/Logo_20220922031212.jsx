import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.img`
  width: 180px;
  cursor: pointer;
`

const Logo = () => {
  return (
    <StyledLogo src='/theDentCare.svg'/>
  )
}

export default Logo
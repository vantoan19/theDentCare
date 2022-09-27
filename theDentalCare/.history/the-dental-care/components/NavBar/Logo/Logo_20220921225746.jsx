import React from 'react'
import styled from 'styled-components'
import logo from '../../../public/theDentCare.svg'

const LogoContainer = styled.span`
    
`

const Logo = () => {
  return (
    <LogoContainer>{logo}</LogoContainer>
  )
}

export default Logo
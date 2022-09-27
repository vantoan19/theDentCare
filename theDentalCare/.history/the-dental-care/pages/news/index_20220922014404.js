import styled from "styled-components"
import NavBar from "../../components/NavBar/NavBar"

const BackgroundImage = styled.img`
  width: 100%;
`

const BackgroundContainer = styled.div`
  width: 100%;
`

export default function Home() {
    return (
      <div>
        <NavBar/>
        <BackgroundContainer>
          <BackgroundImage src='/backgroundImage.png' alt='background image'/>
        </BackgroundContainer>
      </div>
    )
}
  
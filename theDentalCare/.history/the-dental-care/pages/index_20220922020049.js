import styled from "styled-components"
import NavBar from "../components/NavBar/NavBar"
import Button from "../components/UI/Button/Button"

const BackgroundImage = styled.img`
  width: 100%;
`

const BackgroundContainer = styled.div`
  width: 100%;
`

const MainHeader = styled.h1`
  color: #fff;
  font-size: 2.4rem;
`

const Hightlight = styled.span`
  color: #B3E5FC;
`

const MainDescription = styled.p`

`

const MainContainer = styled.div`

`

const HomeContainer = styled.div`

`

export default function Home() {
    return (
      <div>
        <NavBar/>
        <HomeContainer>
          <BackgroundContainer>
            <BackgroundImage src='/backgroundImage.png' alt='background image'/>
          </BackgroundContainer>
          <MainContainer>
            <MainHeader>theDent<Hightlight>Care</Hightlight></MainHeader>
          </MainContainer>
        </HomeContainer>
      </div>
    )
}
  
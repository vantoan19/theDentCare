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
  font-size: 6rem;
`

const Hightlight = styled.span`
  color: #B3E5FC;
`

const MainDescription = styled.p`
  color: #fff;
  font-size: 3rem;
`

const MainContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 50%;
`

const HomeContainer = styled.div`
  position: relative;
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
            <MainDescription>"Răng khỏe - Cười xinh - Tự tin tỏa sáng"</MainDescription>
            <Button>Sứ mệnh của chúng tôi</Button>
          </MainContainer>
        </HomeContainer>
      </div>
    )
}
  
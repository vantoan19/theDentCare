import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/UI/Button/Button";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

const MainHeader = styled.h1`
  color: #fff;
  font-size: 7rem;
  letter-spacing: 1.5px;
  margin: 0px 0;
`;

const Hightlight = styled.span`
  color: #b3e5fc;
`;

const MainDescription = styled.p`
  color: #fff;
  font-size: 3rem;
  margin: 55px 0;
  letter-spacing: 0.2rem;
`;

const MainButton = styled(Button)`
  font-size: 3.2rem;
  padding: 15px 40px;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
  position: relative;
`;

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <HomeContainer>
        <BackgroundImage src="/backgroundImage.png" alt="background image" />
        <MainContainer>
          <MainHeader>
            theDent<Hightlight>Care</Hightlight>
          </MainHeader>
          <MainDescription>
            "Răng khỏe - Cười xinh - Tự tin tỏa sáng"
          </MainDescription>
          <MainButton>Sứ mệnh của chúng tôi</MainButton>
        </MainContainer>
      </HomeContainer>
    </Fragment>
  );
}

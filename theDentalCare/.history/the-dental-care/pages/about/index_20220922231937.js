import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AboutImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GreyMask = styled.div`
  background-color: rgba(30, 30, 30, 0.5);
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardTitle = styled.h3``;

const CardDescription = styled.p``;

const Card = styled.div``;

const CardContainer = styled.div``;

const AboutContainer = styled.div``;

const cardContent = [
  {
    title: "Chúng tôi là ai?",
    desc: "Chúng tôi là những người trẻ mang trong mình khát khao đem đến những giá trị có ích cho cộng đồng, cụ thể là một nụ cười đẹp cho tất cả mọi người. Chúng tôi mang tới những giải pháp, những kiến thức chăm sóc sức khỏe răng miệng tốt nhất và phù hợp nhất cho người dân Việt Nam.",
  },
];

export default function About() {
  return (
    <Fragment>
      <NavBar />
      <AboutContainer>
        <AboutImageContainer>
          <AboutImage src="/about_image.png" alt="about image" />
          <GreyMask />
        </AboutImageContainer>
        <CardContainer>
          <Card>
            <CardTitle>Chúng tôi là ai?</CardTitle>
          </Card>
          <Card></Card>
        </CardContainer>
      </AboutContainer>
    </Fragment>
  );
}

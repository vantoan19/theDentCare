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

export default function About() {
  const cardContent = [
    {
      title: "Chúng tôi là ai?",
      desc: "Chúng tôi là những người trẻ mang trong mình khát khao đem đến những giá trị có ích cho cộng đồng, cụ thể là một nụ cười đẹp cho tất cả mọi người. Chúng tôi mang tới những giải pháp, những kiến thức chăm sóc sức khỏe răng miệng tốt nhất và phù hợp nhất cho người dân Việt Nam.",
    },
    {
      title: "Tầm nhìn",
      desc: "Chúng tôi tin rằng mọi trẻ em và mọi người dân đều có quyền sở hữu hàm răng khỏe mạnh trong suốt cuộc đời. Khỏe mạnh ở đây là cả về hình ảnh và chức năng của răng miệng, chăm sóc ngay từ đầu với bộ răng thật của chính mình sẽ giảm tránh được các nguy cơ về sức khỏe và các chi phí điều trị về sau.",
    },
  ];

  return (
    <Fragment>
      <NavBar />
      <AboutContainer>
        <AboutImageContainer>
          <AboutImage src="/about_image.png" alt="about image" />
          <GreyMask />
        </AboutImageContainer>
        <CardContainer>
          {cardContent.map((content) => {
            <Card>
              <CardTitle>{content.title}</CardTitle>
              <CardDescription>{content.desc}</CardDescription>
            </Card>;
          })}
        </CardContainer>
      </AboutContainer>
    </Fragment>
  );
}

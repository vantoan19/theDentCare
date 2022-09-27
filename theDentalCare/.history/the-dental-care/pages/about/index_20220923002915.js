import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/UI/Card/Card";

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
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 500;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 34px;
`;

const CardContentContainer = styled.div`
  margin: 60px;
`;

const StyledCard = styled(Card)`
  background-color: rgba(1, 53, 82, 1);
  width: 50%;
`;

const CardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 3;
  width: 80%;
`;

const AboutContainer = styled.div`
  position: relative;
`;

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
          {cardContent.map((content) => (
            <StyledCard>
              <CardContentContainer>
                <CardTitle>{content.title}</CardTitle>
                <CardDescription>{content.desc}</CardDescription>
              </CardContentContainer>
            </StyledCard>
          ))}
        </CardContainer>
      </AboutContainer>
    </Fragment>
  );
}

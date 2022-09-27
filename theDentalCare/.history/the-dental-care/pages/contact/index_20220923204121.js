import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";

const ContactFormTextInput = styled.input`
  width: 100%;
  height: 60px;
`;

const ContactFormTextArea = styled.textarea`
  width: 100%;
  height: 150px;
`;

const ContactFormTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  margin: 10px 0;
`;

const ContactFormButton = styled(Button)`
  font-size: 2rem;
  padding: 10px 20px;
  margin: 40px 0;
  width: 60%;
  float: right;
`;

const ContactForm = styled.form`
  background-color: rgba(2, 136, 209, 1);
  margin: 60px;
`;

const FormCard = styled(Card)`
  width: 50%;
`;

const ContactInfoTitle = styled.h3`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 500;
`;

const ContactInfoDesc = styled.p`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 200;
`;

const ContactInfoDetails = styled.a`
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
  display: block;
`;

const ContactInfoWrapper = styled.div`
  margin: 30px;
`;

const InfoCard = styled(Card)`
  width: 50%;
  background-color: rgba(180, 180, 180, 0.3);
`;

const Flex = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 80%;
`;

const ContactContainer = styled.div`
  position: relative;
`;

export default function Contact() {
  return (
    <Fragment>
      <NavBar />
      <ContactContainer>
        <BackgroundImage
          src="/contact_image.jpeg"
          alt="contact background image"
          isMasked={true}
        />
        <Flex>
          <InfoCard>
            <ContactInfoWrapper>
              <ContactInfoTitle>Liên hệ với chúng tôi</ContactInfoTitle>
              <ContactInfoDesc>
                Chúng tôi muốn lắng nghe nhiều hơn từ các bạn
              </ContactInfoDesc>
              <ContactInfoDetails>
                23th Street, London, England
              </ContactInfoDetails>
              <ContactInfoDetails>connect@thedentcare.com</ContactInfoDetails>
              <ContactInfoDetails>+44 0197532486</ContactInfoDetails>
              <ContactInfoDetails>Facebook</ContactInfoDetails>
            </ContactInfoWrapper>
          </InfoCard>
          <FormCard>
            <ContactForm>
              <ContactFormTitle>Họ và tên</ContactFormTitle>
              <ContactFormTextInput />
              <ContactFormTitle>Email</ContactFormTitle>
              <ContactFormTextInput />
              <ContactFormTitle>Nội dung</ContactFormTitle>
              <ContactFormTextArea />
              <ContactFormButton>Gửi</ContactFormButton>
            </ContactForm>
          </FormCard>
        </Flex>
      </ContactContainer>
    </Fragment>
  );
}

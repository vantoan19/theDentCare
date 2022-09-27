import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const ContactFormTextInput = styled.input``;

const ContactFormTextArea = styled.textarea``;

const ContactFormTitle = styled.h3``;

const ContactForm = styled.form`
  background-color: rgba(2, 136, 209, 1);
`;

const ContactInfoTitle = styled.h3``;

const ContactInfoDesc = styled.p``;

const ContactInfoDetails = styled.p``;

const ContactInfoWrapper = styled.div``;

const Flex = styled.div`
  display: flex;
`;

const ContactContainer = styled.div``;

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
          <ContactInfoWrapper>
            <ContactInfoTitle>Liên hệ với chúng tôi</ContactInfoTitle>
            <ContactInfoDesc>
              Chúng tôi muốn lắng nghe nhiều hơn từ các bạn
            </ContactInfoDesc>
            <ContactInfoDetails>
              23th Street, London, England
            </ContactInfoDetails>
            <ContactInfoDetails>connect@thedentcare.com</ContactInfoDetails>
          </ContactInfoWrapper>
          <ContactForm>
            <ContactFormTitle>Họ và tên</ContactFormTitle>
            <ContactFormTextInput />
            <ContactFormTitle>Email</ContactFormTitle>
            <ContactFormTextInput />
            <ContactFormTitle>Nội dung</ContactFormTitle>
            <ContactFormTextArea />
          </ContactForm>
        </Flex>
      </ContactContainer>
    </Fragment>
  );
}

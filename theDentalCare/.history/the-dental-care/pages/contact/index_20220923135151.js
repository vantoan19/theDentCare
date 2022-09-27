import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const ContactFormTextInput = styled.input``;

const ContactFormTextArea = styled.textarea``;

const ContactFormTitle = styled.h3``;

const ContactForm = styled.form`
  background-color: red;
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

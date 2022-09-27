import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Flex from "../../components/UI/Flex/Flex";

const ContactTextInput = styled.input``;

const ContactTextArea = styled.textarea``;

const ContactForm = styled.form``;

const ContactInfoTitle = styled.h3``;

const ContactInfoDesc = styled.p``;

const ContactInfo = styled.p``;

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
      </ContactContainer>
    </Fragment>
  );
}

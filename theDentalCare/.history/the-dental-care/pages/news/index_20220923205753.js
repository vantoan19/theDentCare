import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const NewContainer = styled.div``;

export default function News() {
  return (
    <Fragment>
      <NavBar />
      <NewContainer>
        <BackgroundImage
          src="/contact_image.jpeg"
          alt="news background image"
        />
      </NewContainer>
    </Fragment>
  );
}

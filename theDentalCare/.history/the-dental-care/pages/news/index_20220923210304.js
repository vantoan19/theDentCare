import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const NewsHeader = styled.h2``;

const NewsColumn = styled.div``;

const NewsContainer = styled.div``;

export default function News() {
  return (
    <Fragment>
      <NavBar />
      <BackgroundImage
        src="/contact_image.jpeg"
        alt="news background image"
        isMasked
      />
      <NewsContainer>
        <NewsHeader>Tin tức</NewsHeader>
      </NewsContainer>
    </Fragment>
  );
}

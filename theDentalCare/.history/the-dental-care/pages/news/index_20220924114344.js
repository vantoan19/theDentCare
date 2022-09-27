import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Card from "../../components/UI/Card/Card";

const NewsHeader = styled.h2``;

const NewsImage = styled.img`
  grid-area: img;
`;

const NewsTitle = styled.h3`
  grid-area: title;
`;

const NewsDesc = styled.p`
  grid-area: desc;
`;

const NewsCard = styled(Card)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    "img" "title"
    "img" "desc";
  grid-gap: 1rem;
`;

const NewsColumn = styled.div``;

const NewsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const PageContainer = styled.div`
  position: relative;
`;

const news = [{}];

export default function News() {
  return (
    <Fragment>
      <NavBar />
      <PageContainer>
        <BackgroundImage
          src="/contact_image.jpeg"
          alt="news background image"
          isMasked
        />
        <NewsContainer>
          <NewsHeader>Tin tức</NewsHeader>
        </NewsContainer>
      </PageContainer>
    </Fragment>
  );
}

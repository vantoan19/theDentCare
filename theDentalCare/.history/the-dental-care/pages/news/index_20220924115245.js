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

const news = [
  {
    img_src: "/news/1.png",
    title: "Bác sĩ cảnh báo không nên đánh răng với muối hoặc baking soda",
    desc: "TTO - Về hóa học, baking soda là chất tẩy rửa. Dùng baking soda tẩy trắng răng sẽ khiến men răng bị mòn dần và nhanh vàng ố hơn...",
    href: "https://tuoitre.vn/bac-si-canh-bao-khong-nen-danh-rang-voi-muoi-hoac-baking-soda-20191005073751713.htm",
  },
  {
    img_src: "/news/2.png",
    title: "10 nguyên nhân khiến hơi thở của bạn bốc mùi",
    desc: "TTO - Ăn thực phẩm có mùi, chăm sóc răng miệng kém, uống cà phê hoặc mang bệnh sẽ khiến hơi thở của bạn trở nên hôi, ảnh...",
    href: "https://tuoitre.vn/bac-si-canh-bao-khong-nen-danh-rang-voi-muoi-hoac-baking-soda-20191005073751713.htm",
  },
];

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

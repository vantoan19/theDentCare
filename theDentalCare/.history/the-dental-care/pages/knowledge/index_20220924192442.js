import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Card from "../../components/UI/Card/Card";

const NewsHeader = styled.h2`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 500;
  margin: 30px;
`;

const NewsImage = styled.img`
  grid-area: img;
  width: 200px;
  height: 125px;
  margin: 30px;
`;

const NewsTitle = styled.h3`
  grid-area: title;
  margin: 30px 30px 0px 0px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
`;

const NewsDesc = styled.p`
  grid-area: desc;
  margin: 0 30px 5px 0px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
`;

const NewsCard = styled(Card)`
  display: grid;
  width: 50%%;
  min-height: 150px;
  margin: 15px 30px;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "img"
    "title"
    "desc";
  grid-gap: 1rem;
  background-color: rgba(180, 180, 180, 0.6);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 50%;
  width: 90%;
  transform: translateX(-50%);
  z-index: 2;
`;

const PageContainer = styled.div`
  position: relative;
`;

export default function News() {
  const news = [
    {
      img_src:
        "https://cdn.tuoitre.vn/thumb_w/586/2019/10/5/dnah-rang-1570235681779771597111-15702357680691634761054.png",
      title: "Bác sĩ cảnh báo không nên đánh răng với muối hoặc baking soda",
      desc: "TTO - Về hóa học, baking soda là chất tẩy rửa. Dùng baking soda tẩy trắng răng sẽ khiến men răng bị mòn dần và nhanh vàng ố hơn...",
      href: "https://tuoitre.vn/bac-si-canh-bao-khong-nen-danh-rang-voi-muoi-hoac-baking-soda-20191005073751713.htm",
    },
    {
      img_src:
        "https://cdn.tuoitre.vn/2018/12/10/32372563-man-no-smoking-concept-a-no-smoking-sign-15444152333141733074826.jpg",
      title: "10 nguyên nhân khiến hơi thở của bạn bốc mùi",
      desc: "TTO - Ăn thực phẩm có mùi, chăm sóc răng miệng kém, uống cà phê hoặc mang bệnh sẽ khiến hơi thở của bạn trở nên hôi, ảnh...",
      href: "https://tuoitre.vn/10-nguyen-nhan-khien-hoi-tho-cua-ban-boc-mui-20181210093814671.htm",
    },
    {
      img_src:
        "https://cdn.tuoitre.vn/thumb_w/640/2018/6/29/photo-1-15302574975561893688399.jpg",
      title: "Chăm sóc răng hiệu quả",
      desc: "Răng lợi tốt một phần do yếu tố di truyền, nhưng hầu hết những người có răng lợi tốt là do vệ sinh răng miệng thường xuyên...",
      href: "https://tuoitre.vn/cham-soc-rang-hieu-qua-20180629143404209.htm",
    },
    {
      img_src:
        "https://cdn.tuoitre.vn/thumb_w/640/2017/photo-1-1514446291027.jpg",
      title: "Răng và những vấn đề liên quan",
      desc: "Ở người trưởng thành, răng mọc đầy đủ có đến 32 cái. Người xưa xác định tầm quan trọng của răng đối với con người trong câu thành...",
      href: "https://tuoitre.vn/rang-va-nhung-van-de-lien-quan-20171228143635685.htm",
    },
    {
      img_src:
        "https://cdn.tuoitre.vn/2018/4/11/photo-1-15234397863341810796836.jpg",
      title: "Viêm lợi: Hiểu biết và cách phòng ngừa",
      desc: "Viêm lợi mãn tính sẽ dẫn đến rụng răng. Có rất nhiều nguyên nhân gây nên căn bệnh này nhưng chủ yếu vẫn là vệ sinh răng lợi kém...",
      href: "https://tuoitre.vn/viem-loi-hieu-biet-va-cach-phong-ngua-20180411164702091.htm",
    },
  ];

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
          <Flex>
            {news.map((e) => (
              <a href={e.href} style={{ textDecoration: "none" }}>
                <NewsCard>
                  <NewsImage src={e.img_src} alt={"new img"} />
                  <NewsTitle>{e.title}</NewsTitle>
                  <NewsDesc>{e.desc}</NewsDesc>
                </NewsCard>
              </a>
            ))}
          </Flex>
        </NewsContainer>
      </PageContainer>
    </Fragment>
  );
}

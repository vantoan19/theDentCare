import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Card from "../../components/UI/Card/Card";

const NewsHeader = styled.h2`
  color: #fff;
  font-size: 3rem;
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
  margin: 30px 30px 5px 0px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
`;

const NewsDesc = styled.p`
  grid-area: desc;
  margin: 30px 30px 5px 0px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
`;

const NewsCard = styled(Card)`
  display: grid;
  width: 100%;
  min-height: 200px;
  margin: 15px 30px;
  grid-template-rows: min(50px) 1fr;
  grid-template-areas:
    "img title"
    "img desc";
  grid-gap: 1rem;
  background-color: rgba(180, 180, 180, 0.6);
`;

const NewsColumn = styled.div`
  width: 40%;
  margin: 20px;
  max-height: 100%;
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

  const articles = [
    {
      img_src:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-19583-w/MediaObjects/41598_2022_19583_Fig1_HTML.png?as=webp",
      title:
        "Enamel biomineralization under the effects of indomethacin and celecoxib non-steroidal anti-inflammatory drugs",
      desc: "VDental enamel defects (DED) can be classified as qualitative and quantitative. Qualitative defects are those characterized by hypomineralization of the enamel...",
      href: "https://www.nature.com/articles/s41598-022-19583-w",
    },
    {
      img_src:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-20034-9/MediaObjects/41598_2022_20034_Fig1_HTML.png?as=webp",
      title:
        "Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population",
      desc: "Forensic age estimation provides important evidence for identifying and enforcing age-related laws such as criminal responsibility identification, immigration, and child adoption...",
      href: "https://www.nature.com/articles/s41598-022-20034-9",
    },
    {
      img_src:
        "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnrdp.2017.31/MediaObjects/41572_2017_Article_BFnrdp201731_Figa_HTML.jpg",
      title: "Dental caries",
      desc: "Dental caries formation can affect individuals at any age and involves the interaction between the tooth, the microbial biofilm at the tooth surface and dietary sugars...",
      href: "https://www.nature.com/articles/nrdp201731",
    },
    {
      img_src:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-17889-3/MediaObjects/41598_2022_17889_Fig1_HTML.jpg?as=webp",
      title:
        "Reliability and accuracy of dental MRI for measuring root canal length of incisors and canines: a clinical pilot study",
      desc: "Since the introduction of cone-beam computed tomography (CBCT) in the late 1990s1 three-dimensional (3D) imaging has shown great potential for dentalmaxillo-facial imaging...",
      href: "https://www.nature.com/articles/s41598-022-17889-3",
    },
    {
      img_src:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-021-90430-0/MediaObjects/41598_2021_90430_Fig2_HTML.jpg?as=webp",
      title:
        "Efficacy of continuous apical negative ultrasonic irrigation (CANUI) in penetration of simulated lateral canals in extracted teeth",
      desc: "Apical periodontitis is a biofilm-related infection, and one of the primary goals of treatment is to kill or remove microbes from the root canal system...",
      href: "https://www.nature.com/articles/s41598-021-90430-0",
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
          <NewsColumn>
            <NewsHeader>Tin tức</NewsHeader>
            {news.map((e) => (
              <NewsCard>
                <NewsImage src={e.img_src} alt={"new img"} />
                <NewsTitle>{e.title}</NewsTitle>
                <NewsDesc>{e.desc}</NewsDesc>
              </NewsCard>
            ))}
          </NewsColumn>
          <NewsColumn>
            <NewsHeader>Bài báo khoa học</NewsHeader>
            {articles.map((e) => (
              <NewsCard>
                <NewsImage src={e.img_src} alt={"new img"} />
                <NewsTitle>{e.title}</NewsTitle>
                <NewsDesc>{e.desc}</NewsDesc>
              </NewsCard>
            ))}
          </NewsColumn>
        </NewsContainer>
      </PageContainer>
    </Fragment>
  );
}

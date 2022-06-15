import Helmet from "react-helmet";

import Navbar from "../Navbar";
import Footer from "../Footer";

import {Link} from "react-router-dom";
import Image1 from "../../images/music1.png";

import {
  Container,
  HeaderSection,
  HeaderText,
  HeaderParagrah,
  EmptySpace,
  CardMainContainer,
  Card,
  ImageWrap,
  CardImage,
  CardText,
} from "../TopAlbumsMain/TopAlbumsMainElements";

const TopAlbumsMain = () => {
  return (
    <>
      <Helmet>Top Albums</Helmet>
      <Container>
        <Navbar />
        <EmptySpace></EmptySpace>
        
        <HeaderText>Top Albums</HeaderText>
        <HeaderParagrah>
          Click on a link below to view the 500 greatest albums of all time or
          search above to find what you really want!
        </HeaderParagrah>
        <HeaderSection></HeaderSection>

        <CardMainContainer>
          <Card>
            <Link to="/top-albums?from=1&to=100">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>1-100</CardText>
              </ImageWrap>
            </Link>
          </Card>
          <Card>
            <Link to="/top-albums?from=101&to=200">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>101-200</CardText>
              </ImageWrap>
            </Link>
          </Card>{" "}
          <Card>
            <Link to="/top-albums?from=201&to=300">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>201-300</CardText>
              </ImageWrap>
            </Link>
          </Card>{" "}
          <Card>
            <Link to="/top-albums?from=301&to=400">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>301-400</CardText>
              </ImageWrap>
            </Link>
          </Card>
          <Card>
            <Link to="/top-albums?from=401&to=500">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>401-500</CardText>
              </ImageWrap>
            </Link>
          </Card>
          <Card>
            <Link to="/top-albums?from=501&to=700">
              <ImageWrap>
                <CardImage src={Image1} />
                <CardText>More albums...</CardText>
              </ImageWrap>
            </Link>
          </Card>
        </CardMainContainer>

           
      
        <Footer />
      </Container>
    </>
  );
};

export default TopAlbumsMain;

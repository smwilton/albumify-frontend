import {Link} from "react-router-dom";
import {
  CardMainContainer,
  Card,
  ImageWrap,
  CardImage,
  CardOverlay,
  CardOverlayText,
  CardOverlayTitle,
} from "./CardMainElements";
import Image1 from '../../images/top500pink.jpg';
import Image2 from "../../images/search.png";
import Image3 from "../../images/mypagepink.jpg";

const CardMain = () => {
  return (
    <>
      <CardMainContainer>
        <Card>
          <Link to="/top-albums-main">
            <ImageWrap>
              <CardImage src={Image1} />
              <CardOverlay>
                <CardOverlayTitle>Top 500 Albums</CardOverlayTitle>
                <CardOverlayText>
                  {" "}
                  Click here to discover the greatest 500 albums of all time!
                </CardOverlayText>
              </CardOverlay>
            </ImageWrap>
          </Link>
        </Card>
        <Card>
          <Link to="/search">
            <ImageWrap>
              <CardImage src={Image2} />
              <CardOverlay>
                <CardOverlayTitle>Search</CardOverlayTitle>
                <CardOverlayText>
                  {" "}
                  Head on in to search for what you want!                </CardOverlayText>
              </CardOverlay>
            </ImageWrap>
          </Link>
        </Card>
        <Card>
          <Link to="/my-page">
            <ImageWrap>
              <CardImage src={Image3} />
              <CardOverlay>
                <CardOverlayTitle>My Page</CardOverlayTitle>
                <CardOverlayText>
                  Come in to see your personal page!
                </CardOverlayText>
              </CardOverlay>
            </ImageWrap>
          </Link>
        </Card>
      </CardMainContainer>
    </>
  );
};

export default CardMain;

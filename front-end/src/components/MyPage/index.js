import { useEffect, useState } from "react";
import Albums from "../Albums";
import EditUser from "../EditUser";
import UserInfo from "../UserInfo";
import Helmet from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DeleteMe from "../DeleteMe";
import MyReviewsAccordian from "../MyReviewsAccordian";
import MyRatingsAccordian from "../MyRatingsAccordian";
import {
  MyPageContainer,
  MyPageTitle,
  GridSection,
  FavouritesColumn,
  WantedColumn,
  OwnedColumn,
  TitleText,
  AlbumsWrap,
} from "./MyPageElements";
import MyPageAlbum from "../MyPageAlbum";
import Loading from "../Loading";
import { RiStarSmileFill } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { server } from "../../utils/server";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const MyPage = () => {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser();
      setUser(userFromServer);
      setShow(true);
    };
    getUser();
  }, []);

  const fetchUser = async () => {
    const res = await fetch("http://" + server.HOST + "/api/user", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  const reviews = () => {
    return user.reviews.map((review, key) => (
      <li
        id={review.album_id}
        key={key}
        class={review.user_album_review_state_id}
      >
        {review.user_album_review}
      </li>
    ));
  };

  const beforeLoading = () => {
    return <Loading />;
  };

  const afterLoading = () => {
    return (
      <>
        <Helmet>
          <title>{user.user_first_name}'s Page</title>
        </Helmet>
        <MyPageContainer>
          <Navbar />
          <MyPageTitle>{user.user_first_name}'s Page</MyPageTitle>
          <UserInfo user={user} />
          <EditUser user={user} />
          {user.user_role_id == 2 && (
            <Button variant="contained" color="info" onClick={() => navigate('/admin')}>
              Go to admin page
          </Button>
          )}
          <DeleteMe />
          <hr />
          <MyReviewsAccordian reviews={user.reviews} />
          <MyRatingsAccordian ratings={user.ratings} />
          <GridSection>
            <FavouritesColumn>
              <TitleText>
                Favourites&#160;
                <BsFillEmojiHeartEyesFill />
              </TitleText>
              <AlbumsWrap>
                {user.favourite_albums.length > 0 ? (
                  <Albums
                    albums={user.favourite_albums}
                    refreshOnEvent={true}
                  />
                ) : (
                  "No Albums on your Favourite List"
                )}
                <MyPageAlbum></MyPageAlbum>
              </AlbumsWrap>
            </FavouritesColumn>
            <WantedColumn>
              <TitleText>
                Wanted&#160;
                <RiStarSmileFill />
              </TitleText>
              <AlbumsWrap>
                {user.wanted_albums.length > 0 ? (
                  <Albums albums={user.wanted_albums} refreshOnEvent={true} />
                ) : (
                  "No Albums on your Wanted List"
                )}
              </AlbumsWrap>
            </WantedColumn>
            <OwnedColumn>
              <TitleText>
                Owned&#160;
                <MdOutlineLibraryAddCheck />
              </TitleText>
              <AlbumsWrap>
                {user.owned_albums.length > 0 ? (
                  <Albums albums={user.owned_albums} refreshOnEvent={true} />
                ) : (
                  "No Albums on your Owned List"
                )}
              </AlbumsWrap>
            </OwnedColumn>
          </GridSection>
        </MyPageContainer>
        <Footer />
      </>
    );
  };

  return <>{show ? afterLoading() : beforeLoading()}</>;
};

export default MyPage;

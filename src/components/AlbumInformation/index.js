import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import {
  AlbumInformationContainer,
  AlbumRating,
  AlbumName,
  AlbumArtist,
  AlbumNumber,
  AlbumYear,
  RatingsGrid,
  AlbumGenre,
  AlbumSubgenre,
  TopRow,
  ImageContainer,
  MainDetails,
  Image,
  BottomRow,
  LeftGrid,
  RightGrid,
  PageContainer,
  Title,
  RatingsTitle,
  IconButtons,
  IconButtonsTitle,
} from "./AlbumInformationElements";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { server } from "../../utils/server";
import Loading from "../Loading";
import AlbumFavOwnWan from "../AlbumFavOwnWan";
import AddReview from "../AddReview";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AlbumInformation = () => {
  const { id } = useParams();
  const image = id > 500 ? "DJ-still.png" : `${id}.jpg`;

  const [loaded, setLoaded] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [album, setAlbum] = useState([]);
  const [rating, setRating] = useState([]);
  const [hover, setHover] = useState(-1);

  const getAccessToken = () => Cookies.get("login");
  const isAuthenticated = () => !!getAccessToken();

  useEffect(() => {
    setLoaded(false);

    const getAlbum = async () => {
      const albumFromServer = await fetchAlbum();
      setAlbum(albumFromServer);
      setRating(albumFromServer.album_average_rating);
      console.log(albumFromServer);
    };

    getAlbum();
    setLoaded(true);
  }, []);

  async function postRatingData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response;
  }

  const addRating = () => {
    if (!isAuthenticated()) {
      setSnackMessage("You have to be logged in to rate an album");
      setSnackbarOpen(true);
    } else {
      postRatingData(
        "http://" + server.HOST + "/api/album/" + id + "/rating",
        rating
      ).then((data) => {
        if (data.status == 200) {
          setSnackMessage("Rating submitted");
          setSnackbarOpen(true);
        } else {
          setSnackMessage("You have already rated this album");
          setSnackbarOpen(true);
        }
      });
    }
  };

  const fetchAlbum = async () => {
    const res = await fetch(`http://${server.HOST}/api/album/${id}`);
    const data = await res.json();
    return data;
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const beforeLoading = () => {
    return <Loading />;
  };

  const afterLoading = () => {
    return (
      <PageContainer>
        <Helmet>
          <title>Album Information</title>
        </Helmet>
        <Navbar />
        <AlbumInformationContainer>
          <TopRow>
            <ImageContainer>
              <Image src={require(`../../images/covers/${image}`)} />
            </ImageContainer>
            <MainDetails>
              <AlbumNumber>No. {album.album_number}</AlbumNumber>
              <AlbumName>{album.album_name}</AlbumName>
              <AlbumArtist>{album.artist_name}</AlbumArtist>
              <AlbumYear>Year: {album.album_year}</AlbumYear>
              <AlbumGenre>
                Album Genre(s) :{" "}
                {album != null &&
                  album?.genres?.map((genre) => genre.genre_name + " ")}
              </AlbumGenre>
              <AlbumSubgenre>
                Album Subgenre(s) :{" "}
                {album != null &&
                  album?.sub_genres?.map(
                    (sub_genre) => sub_genre.sub_genre_name + "/ "
                  )}
              </AlbumSubgenre>
              <AlbumRating>
                Average User Rating: {album.album_average_rating}&#160;(
                {album.album_ratings_count}&#160;ratings)
              </AlbumRating>
            </MainDetails>

            <RatingsGrid>
              <RatingsTitle>Rate this album</RatingsTitle>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={rating}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {rating !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : rating]}
                  </Box>
                )}
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" onClick={addRating}>
                  Rate
                </Button>
              </Box>
              <IconButtonsTitle>
                Do you Love, Want or Own this album?
              </IconButtonsTitle>
              <IconButtons>
                <AlbumFavOwnWan albumId={id} />
              </IconButtons>
              <AddReview albumId={id} />
            </RatingsGrid>
          </TopRow>

          <BottomRow>
            <LeftGrid>
              <div style={{ width: "400px" }}>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={`https://open.spotify.com/embed/album/${album.album_spotify_id}?utm_source=generator`}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </LeftGrid>
            <RightGrid>
              <Title>Reviews</Title>
              <ul>
                {album &&
                  album.reviews &&
                  album.reviews.map((review, key) => (
                    <li
                      key={key}
                      style={{
                        borderBottom: "2px solid ",
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      {review.user_album_review}
                    </li>
                  ))}
              </ul>
            </RightGrid>
          </BottomRow>
        </AlbumInformationContainer>

        <Footer />
      </PageContainer>
    );
  };

  return (
    <>
      <style>{`
        .pink {color: #9B3675}
        .white {color: white}
      `}</style>
      {loaded ? afterLoading() : beforeLoading()}
    </>
  );
};

export default AlbumInformation;

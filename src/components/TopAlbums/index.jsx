import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { TopAlbumsContainer, AlbumsWrap, UpArrow } from "./TopAlbumsElements";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Albums from "../Albums";
import TopAlbumsMenu from "../TopAlbumsMenu"
import { server } from "../../utils/server";
import { ImArrowUp } from "react-icons/im";
// import * as React from "react";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getAlbums = async () => {
      const albumsFromServer = await fetchAlbums();
      setAlbums(albumsFromServer);
    };
    getAlbums();
  }, [searchParams]);

  // Fetch Albums
  const fetchAlbums = async () => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const res = await fetch(
      `http://${server.HOST}/api/album?from=${from}&to=${to}`
    );
    const data = await res.json();

    return data;
  };

  return (
    <>
      <Helmet>
        <title>Top Albums</title>
      </Helmet>
      <TopAlbumsContainer>
        <Navbar />
        <TopAlbumsMenu />

        <AlbumsWrap>
          {albums.length > 0 ? (
            <Albums albums={albums} refreshOnEvent={false} />
          ) : (
            "No Albums To Show"
          )}
        </AlbumsWrap>
        <UpArrow>
          <ImArrowUp />
        </UpArrow>

        <Footer />
      </TopAlbumsContainer>
    </>
  );
};

export default TopAlbums;

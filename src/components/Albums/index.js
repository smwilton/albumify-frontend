
import {useEffect, useState} from "react";
import { AlbumsContainer } from './AlbumsElements'

import TopCards from '../TopCards'
import Cookies from 'js-cookie';
import { server } from "../../utils/server";
import Loading from "../Loading";

const Albums = ({ albums, refreshOnEvent }) => {

  const [favoriteAlbumIds, setFavoriteAlbumIds] = useState([]);
  const [wantedAlbumIds, setWantedAlbumIds] = useState([]);
  const [ownedAlbumIds, setOwnedAlbumIds] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getAccessToken = () => Cookies.get('login');
  const isAuthenticated = () => !!getAccessToken();


  useEffect(() => {

    setLoaded(false);

    const getUserFavOwnWan = async () => {

      const res = await fetch('http://' + server.HOST + '/api/user', {
        method: 'GET',
        credentials: 'include'
      });

      if(res.status == 200) {
        const data = await res.json();

        const favIds = data.favourite_albums.map(item => item.album_id);
        setFavoriteAlbumIds([...favoriteAlbumIds, ...favIds]);

        const ownedIds = data.owned_albums.map(item => item.album_id);
        setOwnedAlbumIds([...ownedAlbumIds, ...ownedIds]);

        const wantedIds = data.wanted_albums.map(item => item.album_id);
        setWantedAlbumIds([...wantedAlbumIds, ...wantedIds]);
      }
      setLoaded(true);
    };

    if(isAuthenticated()) {
      getUserFavOwnWan();
    } else {
      setLoaded(true);
    }
  }, [albums]);

  const beforeLoading = () => {
    return <Loading />
  }

  const afterLoading = () => {
    return (<AlbumsContainer>
        {albums.map((album, index) => (
          <TopCards
            key={index}
            album={album}
            favourited={favoriteAlbumIds.includes(album.album_id)}
            wanted={wantedAlbumIds.includes(album.album_id)}
            owned={ownedAlbumIds.includes(album.album_id)}
            refresh={refreshOnEvent}
          />
        ))}
    </AlbumsContainer>);
  }

  return (
    <>
      {loaded ? (afterLoading()) : (beforeLoading())}
    </>
  );
}

export default Albums
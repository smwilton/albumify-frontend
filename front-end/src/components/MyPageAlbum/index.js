import {
  AlbumBox,
  AlbumNumber,
  AlbumName,
  ArtistName,
} from "./MyPageAlbumElements";

const MyPageAlbum = ({ album }) => {
  return (
    <>
      <AlbumBox className={"album"}>
        <AlbumNumber>{/* {album.album_number}. */}</AlbumNumber>
        <AlbumName></AlbumName>
        <ArtistName></ArtistName>
      </AlbumBox>
    </>
  );
};

export default MyPageAlbum;

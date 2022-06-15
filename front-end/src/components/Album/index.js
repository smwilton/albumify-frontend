
import { Link } from "react-router-dom";
import {
  AlbumBox,
  Info,
  AlbumNumber,
  AlbumName,
  AlbumYear,
  ArtistName,
  AlbumAverageRating,
  AlbumRatingsCount,
  RatingInfo,
  MainImage,
} from "./AlbumElements";
import Image1 from "/Users/sandrawilton/Desktop/WebDev/finalproject/greatest-albums/src/images/vinyl-g050571fbc_1920.jpg";

const Album = ({album}) => {

  const linkTo = "/album-info/" + album.album_id;

  return (
    <Link to = {linkTo}>
    <AlbumBox
      className={`album`}
      // onDoubleClick={() => onToggle(task.id)}
    >
      
      <AlbumNumber>
        {album.album_number}.
      </AlbumNumber>

      <Info>
        <AlbumYear>{album.album_year} </AlbumYear>
        <ArtistName>{album.artist_name} </ArtistName>
        <AlbumName>{album.album_name}</AlbumName>
      </Info>

      <RatingInfo>
        <AlbumAverageRating>
          Average Album Rating : {album.album_average_rating}
        </AlbumAverageRating>
        <AlbumRatingsCount>
          Number of Ratings : {album.album_ratings_count}
        </AlbumRatingsCount>
      </RatingInfo>

      <MainImage src={Image1} />
     
    </AlbumBox>
    </Link>
  );
};

export default Album;
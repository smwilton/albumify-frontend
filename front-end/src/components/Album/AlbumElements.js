import styled from "styled-components";

export const AlbumBox = styled.div`
  border: solid 1px white;
  padding: 20px;
  background-color: #3993b4;
  display:grid;
  grid-template-columns: 2fr 3fr 3fr auto;
  grid-template-areas: "num info ratingInfo img"
  
`;

export const AlbumNumber = styled.h3`
  color: white;
  font-family: "Roboto Serif", sans-serif;
  font-size: 100px;
  grid-area:num;
  align-items: center;
  
`;
export const AlbumYear = styled.p`
font-size: 15px;
  color: white;
`;
export const AlbumName = styled.p`
font-size: 15px;
  color: white;
`;
export const ArtistName = styled.p`
font-size: 15px;
  color: white;
`;
export const AlbumAverageRating = styled.p`
font-size: 15px;
  color: white;
`;

export const AlbumRatingsCount = styled.p`
font-size: 15px; 
  color: white;
`;


export const Info = styled.div`
grid-area: info;
`;

export const RatingInfo = styled.div`
grid-area: ratingInfo;
`;

export const MainImage = styled.img`
grid-area: img;
height :180px;

@media screen and (max-width: 786px){
    height:100px;
}
`
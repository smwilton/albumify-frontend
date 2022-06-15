import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
background:#3993b4;
`

export const AlbumInformationContainer = styled.div`
  color: #fff;
  background:#3993b4;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px;
  margin-top: 30px;
  
`;
export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 30px;
  margin-left: 30px;

 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  
`;

export const MainDetails = styled.div`
  margin-left: 150px;
`;
export const RatingsGrid = styled.div`
  margin-left: 50px;
  margin-top:180px;
`;

export const AlbumNumber = styled.p`
  font-family: "Roboto Serif", sans-serif;
  font-size: 100px;

  @media screen and (max-width: 700px) {
    font-size: 40px;
    margin-top: 20px;
  }
`;
export const AlbumName = styled.h2`
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const AlbumArtist = styled.p`
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const AlbumYear = styled.p``;
export const AlbumRating = styled.p``;
export const AlbumRatingsCount = styled.p``;

export const AlbumGenre = styled.p``;
export const AlbumSubgenre = styled.p``;

export const LeftGrid = styled.div`
  margin-right: 100px;
  margin-left: 30px;
`;
export const RightGrid = styled.div`
 margin-left: 150px;
  border-style: double;
  border-width: 5px;
  margin-right: 100px;
  padding:10px;
  border-radius: 10px;
 
`;

export const RatingsTitle = styled.h2`

`
export const IconButtonsTitle = styled.h2`
margin-top:40px;
`

export const Title = styled.p`
font-family: "Lobster", cursive;
font-size: 50px;
text-align: center;
`
export const IconButtons = styled.div`
color: #fff;
border:none;
display:flex;
font-size:30px;


`
export const Favourite= styled.div`
color: #fff;
margin-right:20px;
&:hover{
    color:#9B3675;
}
`
export const Wanted= styled.div`
color: #fff;
margin-right:20px;
&:hover{
    color:#9B3675;
}
`
export const Owned= styled.div`
color: #fff;
&:hover{
    color:#9B3675;
}
`
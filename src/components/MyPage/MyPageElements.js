import styled from "styled-components";

export const MyPageContainer = styled.div`
  color: #fff;
`;

export const MyPageTitle = styled.p`
  font-family: "Lobster", cursive;
  font-size: 60px;
  text-align: center;
  margin-top: 30px;
`;

export const GridSection = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: auto auto auto;
  
  border: 3px solid #fff;

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

export const FavouritesColumn = styled.div`
  color: #fff;
  border: 3px solid #fff;
`;
export const WantedColumn = styled.div`
  color: #fff;
  border: 3px solid #fff;
`;
export const OwnedColumn = styled.div`
  color: #fff;
  border: 3px solid #fff;
`;

export const TitleText = styled.p`
  font-family: "Lobster", cursive;
  font-size: 40px;
  text-align: center;
`;

export const AlbumsWrap = styled.div`
  padding: 5px;

`;

export const MyPageAlbum = styled.div`
  padding: 5px;
`;


import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SearchMondayContainer = styled.div`
  margin-top: 80px;
`;
export const PageTitle = styled.p`
  font-family: "Lobster", cursive;
  font-size: 60px;
  text-align: center;
  margin-top: 30px;
  color: #fff;
`;

export const SearchContainerTop = styled.div`
  margin: 0 100px 0 100px;
`;
export const SearchContainerBottom = styled.div`
  margin: 0 100px 0 100px;
`;
export const SearchHeading = styled.p`
  text-transform: uppercase;
  size: 13.6px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;
export const SearchByYear = styled.div`
  border: 3px solid #fff;
  display: grid;
  grid-template-columns: auto auto;
`;

export const MinYear = styled.option``;
export const MaxYear = styled.option``;

export const MinYearContainer = styled.select`
  display: grid;
`;

export const MaxYearContainer = styled.select`
  display: grid;
`;
export const SearchGroup = styled.div`
  display: grid;
`;
export const SearchByGenre = styled.div`
  border: 3px solid #fff;
  background: #fff;
  display: grid;

`;
export const GenreContainer = styled.select``;
export const SubgenreContainer = styled.select`
  background: #fff;
`;
export const SearchBySubgenre = styled.div`
  border: 3px solid #fff;
  background: #fff;
  display: grid;
`;
export const GenreOptions = styled.option`
`

export const SubgenreOptions = styled.option`
`

export const GenreSubgenreContainer = styled.div`
`
export const SearchBtn = styled.nav `
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  
`

export const SearchBtnLink = styled.button`
  border-radius: 50px;
  background: #9B3675;
  white-space: nowrap;
  margin-top:50px;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  align-items:center;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #9B3675;
  }`

  export const ResultsContainer = styled.section``
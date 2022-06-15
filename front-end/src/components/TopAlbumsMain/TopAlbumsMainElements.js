import styled from "styled-components";

export const Container = styled.div`
  background-color: #3993b4;
`;

export const HeaderSection = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const HeaderText = styled.h1`
  font-family: "Lobster", cursive;
  color: white;
  font-size: 60px;
  text-align: center;
`;
export const HeaderParagrah = styled.p`
  color: white;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
  position: relative;
`;
export const EmptySpace = styled.div`
  height: 40px;
`;
export const CardMainContainer = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 100%;
  height: auto;
  background-color: #3993b4;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: #3993b4;
  border: 1px solid;
  padding: 10px;
`;

export const ImageWrap = styled.div`
  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background-color: #3993b4;
  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;

export const CardText = styled.h1`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  font-size: 35px;
  font-weight: bold;
  font-family: "Lobster";
`;

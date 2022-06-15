import styled from "styled-components";

export const CardMainContainer = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 100%;
  height: auto;

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
`;

export const ImageWrap = styled.div``;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background-color: #3993b4;
`;

export const CardOverlay = styled.div`

position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #3993b4;

  &:hover {
    opacity: 1;
  }
  
  
`;

export const CardOverlayTitle = styled.h2`
  color: #fff;
  font-size: 50px;
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardOverlayText = styled.p`
  color: #fff;
  font-size: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

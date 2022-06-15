import styled from "styled-components";


export const HeroContainer = styled.div`
background: #3993b4;
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
height: auto;
position: relative;
z-index: 100%;

/* Add: before styles */
@media screen and (max-width:1000px){
width: 100%;
height: 100%;

}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
@media screen and (max-width:1000px){
width: 100%;
height: 100%;

}
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #3993b4;
  @media screen and (max-width:1000px){
width: 100%;
height: 100%;

}
`;

export const HeroH1 = styled.div`
  position: relative;
  text-align: center;
  font-size: 80px;
  border: 1px solid #fff transparent;
  letter-spacing: 5px;
  line-height: 0.8;
  background: #fff;
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;padding: 175px;
  font-family: "Lobster", cursive;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }

 
`;

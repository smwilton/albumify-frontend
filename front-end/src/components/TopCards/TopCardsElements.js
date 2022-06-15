import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  margin: auto;
  margin-bottom:10px;
  text-align: center;
  font-family: arial;
  background-color: #3993b4;
  /* flex-basis:0;
  flex: 1 1 0px; */
  width:200px;
  height:450px;
  
`;
export const CardImage = styled.img`
  margin-top: 10px;
  background-color: #0c0c0d;
  height:180px;
`;

export const Title = styled.p`
  color: #fff;
`;

export const Artist = styled.p`
  color: #fff;
`;

export const CardContainer = styled.div`
display:inline-flex;
flex-wrap: wrap;
align-items: center;
`;


export const Number = styled.p`
  
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 50px;
  /* margin: 2px 2px; */
  border-radius: 12px;
  margin-bottom: 0px;
  font-family: "Roboto Serif", sans-serif;
  /* font-size: 100px; */
`;

// IconButtons Favourite Wanted Owned

export const IconButtons = styled.div`
color: #fff;
border:none;
display:flex;
justify-content:space-around;
font-size:30px;


`
export const Favourite= styled.div`
color: #fff;
&:hover{
    color:#9B3675;
}
`
export const Wanted= styled.div`
color: #fff;
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

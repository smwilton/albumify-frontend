import styled from "styled-components";
import Image from '../../images/DJ-still.png'
export const Container = styled.div`

  background-color: #3993b4;
  color:#fff; 
 
`;



export const FormContainer = styled.div``;
export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding:50px 32px;
  border-radius: 10px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */
  margin-bottom:50px;
  background-color: #0c0c0d;
  transparency:50%;

`;
export const FormLabel = styled.label`
 margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  background: #0c0c0d;
`;
export const FormInput = styled.input`
background-color: #fff;
border-radius: 10px;
padding:10px;
margin-bottom:8px;
`;
export const FormButton = styled.button`
 background: #9b3675;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top:20px;

  &:active{

    transform: translateY(2px);
   
  }
`;


export const ImageWrap = styled.div``;


export const FormImage = styled.img`
width:100px;
border-radius: 4px;

`;
export const FormH1 = styled.h1`
margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color: #0c0c0d;
  
  
`

export const RequiredInputText = styled.p`
 background-color: #0c0c0d;
text-align:right;
`
export const Button = styled.button`

`
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  /* min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  height: 100%; */

  background-color: #3993b4;
  color:#fff; 

  );
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
  font-family: "Lobster", cursive;
  text-shadow: 0 5px #9b3675;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3993b4;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #0c0c0d;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color: #0c0c0d;
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
  margin-top:40px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  background-color: #0c0c0d;
`;



import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from 'react-scroll'
import Button from '@mui/material/Button'

export const Nav = styled.nav `
  background: #3993b4;
  height: 100px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  font-size: 1rem;

  top: 0;
  z-index: 10;
  font-weight: bold;
  padding-top: 18px;
  position: sticky;
  margin-bottom:100px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  background: transparent;
`;

export const NavLogo = styled(LinkR)`

  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
  font-family: 'Lobster', cursive;
  text-shadow: 0 5px #9B3675;

  &.hover { 
    color: white;
  };
 
  `


export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li `
  height: 80px;
  margin: 20px;
  color: #fff;
  padding-top: 40px;
  display:grid;
  align-items: center;
  &:hover {
     border-bottom: 8px solid #9B3675;
     color: #9B3675;
 }
`

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71
  }
`

 

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #9B3675;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #9B3675;
  }
`
export const NavBtnLinkGrid=styled.div`
display:grid;
grid-template-columns: auto auto;
`
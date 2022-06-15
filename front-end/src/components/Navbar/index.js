import {FaBars} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {FaUserCircle} from "react-icons/fa"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import {NavLink} from "react-router-dom";
import Cookies from 'js-cookie';

const Navbar = ({toggle}) => {

  const getAccessToken = () => Cookies.get('login');
  const isAuthenticated = () => !!getAccessToken();

  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Albumify</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink to="/top-albums-main" style={{color: "white"}}>
                  Top 500 Albums
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/search" style={{color: "white"}}>
                Search Page
                </NavLink>
              </NavItem>

              {!isAuthenticated() &&
                  <NavItem>
                    <NavLink to="/register" style={{color: "white"}}>
                      Register
                    </NavLink>
                  </NavItem>
              }
              
              
              {isAuthenticated() ?
              <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>
                  <NavBtn to="/my-page">
                    <NavBtnLink to="/my-page">< FaUserCircle />&nbsp;My page</NavBtnLink>
                  </NavBtn>
                  <NavBtn>
                    <NavBtnLink to="/signout">Sign out</NavBtnLink>
                  </NavBtn>
              </span>
              :
                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
              }
              </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

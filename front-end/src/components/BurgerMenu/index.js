
import {BurgerContainer, Icon, CloseIcon, BurgerWrapper, BurgerList, BurgerLink, BurgerRoute, BurgerBtnWrap} from './BurgerMenuElements'

const BurgerMenu = ({isOpen,toggle}) => {
  
  
  
    return  (
  
  <BurgerContainer isOpen={isOpen} onClick={toggle}>
  <Icon onClick={toggle}>
    <CloseIcon />
  </Icon>
  <BurgerWrapper>
    <BurgerList>
      <BurgerLink to="/top-albums" onClick={toggle}>Top Albums</BurgerLink>
      <BurgerLink to="/search" onClick={toggle}>Search Page</BurgerLink>
      <BurgerLink to="/register" onClick={toggle}>Register</BurgerLink>
      
    </BurgerList>
    <BurgerBtnWrap>
      <BurgerRoute to="/signin">Sign in</BurgerRoute>
    </BurgerBtnWrap>
  </BurgerWrapper>
</BurgerContainer>
    )
}


export default BurgerMenu;

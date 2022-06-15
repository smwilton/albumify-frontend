import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle} style={{backgroundColor: "#3993b4"}}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/top-albums-main' onClick={toggle}>Top 500 Albums</SidebarLink>
            <SidebarLink to='/stats' onClick={toggle}>Cool Stats</SidebarLink>
            <SidebarLink to='/signup' onClick={toggle}>Sign Up</SidebarLink>
            <SidebarLink to='/my-page' onClick={toggle}>Extra Thing</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    )
  }

export default Sidebar

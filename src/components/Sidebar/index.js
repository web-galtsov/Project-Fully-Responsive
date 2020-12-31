import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from "./SlidebarElements"
//import { NavLinks } from "../Navbar/NavbarElements";


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "aboutus">About Us </SidebarLink>
                    <SidebarLink to = "discover">Discover</SidebarLink>
                    <SidebarLink to = "services">Services</SidebarLink>
                    <SidebarLink to = "signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "signin"> Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;
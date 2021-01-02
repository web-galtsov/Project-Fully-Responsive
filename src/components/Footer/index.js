import React from "react";

import {FooterContent,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterTitle,
        FooterLink,
        SocialMedia,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialMediaWrap,
        SocialIconLink
} from "./footerElements";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContent>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterTitle>About Us</FooterTitle>
                                <FooterLink to = "/signin">How it works</FooterLink>
                                <FooterLink to = "/signin">Testimonials</FooterLink>
                                <FooterLink to = "/signin">Careers</FooterLink>
                                <FooterLink to = "/signin">Investors</FooterLink>
                                <FooterLink to = "/signin">Terms of Service</FooterLink>
                                <FooterLink to = "/signin">About us</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterTitle>Videos</FooterTitle>
                            <FooterLink to = "/signin">Submit Video</FooterLink>
                            <FooterLink to = "/signin">Ambassadors</FooterLink>
                            <FooterLink to = "/signin">Agency</FooterLink>
                            <FooterLink to = "/signin">Influencer</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterTitle>Contact Us</FooterTitle>
                            <FooterLink to = "/signin">Contact</FooterLink>
                            <FooterLink to = "/signin">Support</FooterLink>
                            <FooterLink to = "/signin">Destinations</FooterLink>
                            <FooterLink to = "/signin">Sponsorships</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterTitle>Social Media</FooterTitle>
                            <FooterLink to = "/signin">Instagram</FooterLink>
                            <FooterLink to = "/signin">Facebook</FooterLink>
                            <FooterLink to = "/signin">Youtube</FooterLink>
                            <FooterLink to = "/signin">Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = "/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla  © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                             <SocialIconLink href = "/" target = "_blank" arial-label = "Facebook"><FaFacebook/></SocialIconLink>
                             <SocialIconLink href = "/" target = "_blank" arial-label = "Instagram"><FaInstagram/></SocialIconLink>
                             <SocialIconLink href = "/" target = "_blank" arial-label = "Youtube"><FaYoutube/></SocialIconLink>
                             <SocialIconLink href = "/" target = "_blank" arial-label = "Twitter"><FaTwitter/></SocialIconLink>
                             <SocialIconLink href = "/" target = "_blank" arial-label = "Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContent>
    );
};
export default Footer;
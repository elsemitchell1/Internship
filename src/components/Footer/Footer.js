import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiMarsCuriosity } from 'react-icons/gi';
import { FooterContainer, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink
    } 
    from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/Shopify">
                        <GiMarsCuriosity />
                        &nbsp;Shopify API
                    </SocialLogo>
                    <WebsiteRights>Mitchell Else 2022</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/NASA' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/nasa/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/mitchell-else-b29b24224' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>       
        </FooterContainer>
    )
}

export default Footer

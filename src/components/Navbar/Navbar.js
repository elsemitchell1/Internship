import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { GiMarsCuriosity } from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import { Nav, 
    NavbarContainer, 
    NavLogo,  
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink 
} from './Navbar.elements';


const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/Shopify/">
                        <GiMarsCuriosity />
                        &nbsp;Shopify API
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/Shopify'>
                                Rover Gallery
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Apod'>
                                Hazard Camera
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                            <NavBtnLink to='//linkedin.com/in/mitchell-else-b29b24224' target="_blank" aria-label="Linkedin">
                                <Button primary>LinkedIn</Button>
                            </NavBtnLink>
                            ) : (
                                <NavBtnLink to= '//linkedin.com/in/mitchell-else-b29b24224' target="_blank" aria-label="Linkedin">
                                    <Button fontBig primary>
                                        LinkedIn
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

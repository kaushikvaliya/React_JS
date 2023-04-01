import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';


const Headerfile = () => {
    const [showNavColor, setShowNavColor] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='primary'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColor(!showNavColor)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColor} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <Link className='nav-link' to="/">Home</Link>
                                {/* <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/Features">Features</Link>
                                {/* <MDBNavbarLink href='#'>Features</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/examplepage">example</Link>
                                {/* <MDBNavbarLink href='#'>Pricing</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/about">About</Link>
                                {/* <MDBNavbarLink href='#'>About</MDBNavbarLink> */}
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Headerfile;
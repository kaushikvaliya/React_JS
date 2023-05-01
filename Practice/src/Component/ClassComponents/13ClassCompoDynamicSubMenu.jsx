import React, { Component } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



class ClassCompoDynamicSubMenu extends Component {

    // sumoftownumber = (tada) => {
    //     console.log("kaushik");
    // }
    // sumoftownumber();
    render() {

        const menuItems = [
            {
                title: 'Home',
                url: `/`,
            },
            {
                title: 'about',
                url: `/about`,
            }
            , {
                title: 'Services',
                url: '/services',
                submenu: [
                    {
                        title: 'web design',
                        url: 'web-design',
                    },
                    {
                        title: 'web development',
                        url: 'web-dev',
                    },
                    {
                        title: 'SEO',
                        url: 'seo',
                    },
                ],
            },
            , {
                title: 'Tops',
                url: '/tops',
                submenu: [
                    {
                        title: 'web design',
                        url: 'web-design',
                    },
                    {
                        title: 'web development',
                        url: 'web-dev',
                    },
                    {
                        title: 'SEO',
                        url: 'seo',
                    },
                ],
            },
        ];


        const MenuData = menuItems.map((data, index) => {
            // console.log(data.submenu);
            if (data.submenu != undefined) {
                var submenudata = data.submenu.map((submenu, index) => {
                    // console.log("called inner loop", submenu);
                    return <MDBDropdownItem key={index} link>{submenu.title}</MDBDropdownItem>
                })
            }
            if (data.submenu == null) {
                return <MDBNavbarItem key={index}>
                    <Link className='nav-link' to={data.url}>
                        {data.title}
                    </Link>
                </MDBNavbarItem>
            } else {
                return < MDBNavbarItem key={index} >
                    <MDBDropdown>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            {data.title}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            {submenudata}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </ MDBNavbarItem>
            }
        })
        return (
            <>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
                        {/*
                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler> */}
                        <MDBCollapse navbar >
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                {MenuData}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </>
        );
    }
}

export default ClassCompoDynamicSubMenu;
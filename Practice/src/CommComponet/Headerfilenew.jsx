import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';

class headern extends Component {
    render() {

        const data = [
            { key: `/`, value: "Home" },
            { key: `/about`, value: "About" },
            { key: `/examplepage`, value: "Example" },
            { key: `/product`, value: "Product" }
        ]
        const mapdata = data.map(({ key, value }, index) => {
            return (
                <MDBNavbarItem key={index}>
                    <MDBNavbarItem className='nav-link' key={index}>
                        <NavLink
                            to={key}
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active_link" : ""} >
                            {value}
                        </NavLink>
                    </MDBNavbarItem>
                </MDBNavbarItem>
            )
        })
        return (
            <>
                <MDBNavbar expand='lg' light bgColor='light' className='sticky-top'>
                    <MDBContainer fluid>

                        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                        <MDBCollapse navbar children='' >
                            <MDBNavbarNav className='ms-auto  w-auto me-3  mb-2 mb-lg-0' >
                                {mapdata}
                            </MDBNavbarNav>

                            {/* <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form> */}
                        </MDBCollapse>
                    </MDBContainer>

                </MDBNavbar>
            </>
        );
    }
}

export default headern;
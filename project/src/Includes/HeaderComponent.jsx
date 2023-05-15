

import React, { useState } from 'react';
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

const FunctionCompoDynamicSubMenu = () => {
    const [showBasic, setShowBasic] = useState(false);

    const menuItems = [
        {
            title: 'Home',
            url: `/`,
        },
        {
            title: 'about',
            url: `/about`,
        },
        {
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
        {
            title: 'LoginRegistration',
            url: `/loginregistration`,
        },
        {
            title: 'FetchAPI',
            url: `/fetchapi`,
        },

    ];

    const MenuData = menuItems.map((data, index) => {
        if (data.submenu != undefined) {
            var submenudata = data.submenu.map((submenu, index) => {
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
            return <MDBNavbarItem key={index}>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                        {data.title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        {submenudata}
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarItem>
        }
    })

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />

                    </MDBNavbarToggler>



                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='ms-auto w-auto mb-2 mb-lg-0 '>
                            {/* <MDBNavbarNav className='m-auto w-auto mb-2 mb-lg-0 '> */}
                            {MenuData}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default FunctionCompoDynamicSubMenu;





// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBBtn,
//     MDBDropdown,
//     MDBDropdownToggle,
//     MDBDropdownMenu,
//     MDBDropdownItem,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';

// const HeaderComponent = () => {
//     const [showBasic, setShowBasic] = useState(false);
//     const menuItems = [
//         {
//             title: 'Home',
//             url: `/`,
//         },
//         {
//             title: 'about',
//             url: `/about`,
//         },
//         {
//             title: 'contact',
//             url: `/contact`,
//         }
//         , {
//             title: 'Services',
//             url: '/services',
//             submenu: [
//                 {
//                     title: 'web design',
//                     url: 'web-design',
//                 },
//                 {
//                     title: 'web development',
//                     url: 'web-dev',
//                 },
//                 {
//                     title: 'SEO',
//                     url: 'seo',
//                 },
//             ],
//         },
//         , {
//             title: 'Tops',
//             url: '/tops',
//             submenu: [
//                 {
//                     title: 'web design',
//                     url: 'web-design',
//                 },
//                 {
//                     title: 'web development',
//                     url: 'web-dev',
//                 },
//                 {
//                     title: 'SEO',
//                     url: 'seo',
//                 },
//             ],
//         },

//     ];



//     const MenuData = menuItems.map((data, index) => {
//         // console.log(data.submenu);
//         // jyare submenu madse tyare
//         if (data.submenu != undefined) {
//             var submenudata = data.submenu.map((submenu, index) => {
//                 console.log("called inner loop", submenu);
//                 return <MDBDropdownItem key={index}>
//                     <MDBNavbarLink className='nav-link' href={submenu.url}>
//                         {submenu.title}
//                     </MDBNavbarLink>
//                 </MDBDropdownItem>
//             })
//         }
//         // jyare submenu madse nahi  tyare
//         if (data.submenu == null) {
//             // console.log('nandan', data.title);
//             // console.log('nandan', data.url);
//             return <MDBNavbarItem key={index}>
//                 <MDBNavbarLink className='nav-link' href={data.url}>
//                     {data.title}
//                 </MDBNavbarLink>
//             </MDBNavbarItem>
//         } else {
//             return < MDBNavbarItem key={index} >
//                 <MDBDropdown>
//                     <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                         {data.title}
//                     </MDBDropdownToggle>
//                     <MDBDropdownMenu>
//                         {submenudata}
//                     </MDBDropdownMenu>
//                 </MDBDropdown>
//             </ MDBNavbarItem>
//         }
//     })


//     return (
//         <>
//             <MDBNavbar expand='lg' light bgColor='light'>
//                 <MDBContainer fluid>
//                     <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//                     <MDBNavbarToggler
//                         aria-controls='navbarSupportedContent'
//                         aria-expanded='false'
//                         aria-label='Toggle navigation'
//                         onClick={() => setShowBasic(!showBasic)}
//                     >
//                         <MDBIcon icon='bars' fas />
//                     </MDBNavbarToggler>

//                     <MDBCollapse navbar show={showBasic}>
//                         <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//                             {MenuData}
//                         </MDBNavbarNav>

//                         <form className='d-flex input-group w-auto'>
//                             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
//                             <MDBBtn color='primary'>Search</MDBBtn>
//                         </form>
//                     </MDBCollapse>
//                 </MDBContainer>
//             </MDBNavbar>
//         </>
//     );
// };

// export default HeaderComponent;


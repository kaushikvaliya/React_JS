import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './Includes/HeaderComponent';
import Homepage from './Pages/Homepage.jsx';
import Aboutpage from './Pages/Aboutpage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
            <Homepage />
        </>,

    }, {
        path: "/about",
        element:
            <>
                <HeaderComponent />
                <Aboutpage />
            </>

    }, {
        path: "/contact",
        element:
            <>
                <HeaderComponent />
                <ContactPage />
            </>

    },
    {
        path: "/services",
        element:
            <>
                <HeaderComponent />
                <ServicesPage />
            </>

    }

]);

export default Mainrouter;
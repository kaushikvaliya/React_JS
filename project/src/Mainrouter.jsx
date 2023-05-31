import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './Includes/HeaderComponent';
import Homepage from './Pages/Homepage.jsx';
import Aboutpage from './Pages/Aboutpage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import LoginRegistration from './Components/LoginRegistration.jsx';
// import AdminDashBoard from './Components/LoginRegistration.jsx';
// import FetchAPI from './Components/FetchAPI';
const AdminRouter = React.lazy(() => import("./Admin/AdminRouter"))

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

    },
    {
        path: "/loginregistration",
        element:
            <>
                <LoginRegistration />
            </>

    },
    {
        path: "/admindashboard",
        element:
            <>
                <h2>admindashboard</h2>
            </>

    },
    {
        path: "/userdarshboard",
        element:
            <>
                <h2>userdarshboard</h2>
            </>

    }, {
        path: "admin/*",
        element:
            <>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <AdminRouter></AdminRouter>
                </Suspense>
            </>

    }


]);

export default Mainrouter;
import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import Headerfile from './CommComponet/headerfile';
import Headerfile from './CommComponet/Headerfilenew';
import Homepage from './Homepage';
import Featurespage from './Features.jsx';
import Example from './example.jsx';
import Aboutpage from './Aboutpage.jsx';
import Arror from '../src/CommComponet/Arror';
const ClassCompoRouter = React.lazy(() => import('./Component/ClassComponents/ClassCompoRouter'));

const menrouter = createBrowserRouter([
    // {
    //     path: "*",
    //     element: <Arror></Arror>
    // },
    {
        path: "/",
        element: <><Headerfile /><Homepage /></>,
        errorElement: <Arror></Arror>,

    }, {
        path: "/Features",
        element:
            <>
                <Headerfile></Headerfile>
                <Featurespage></Featurespage>
            </>

    }, {
        path: "/about",
        element:
            <>
                <Headerfile></Headerfile>
                <Aboutpage></Aboutpage>
            </>

    }, {
        path: "/examplepage",
        element:
            <>
                <Headerfile></Headerfile>
                <Example></Example>
            </>,
        children: [
            {
                path: "classcomporouter/*",
                element:
                    <Suspense fallback={<>
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </>}>
                        {/* <Suspense fallback={<div className='page-loader'>Loading...</div>}> */}
                        <ClassCompoRouter />
                    </Suspense>,

                // <Suspense fallback={<div className='page-loader'>Loading...</div>}>
                // {/* <Suspense fallback={<div className='page-loader'>Loading...</div>}> */}
                //     <ClassCompoRouter />
                // </Suspense>,
            },
        ]
    },

]);

export default menrouter;
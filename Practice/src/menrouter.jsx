import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import Headerfile from './CommComponet/headerfile';
import Headerfile from './CommComponet/Headerfilenew';
import Homepage from './Homepage';
import Featurespage from './Product.jsx';
import Example from './example.jsx';
import Aboutpage from './Aboutpage.jsx';
import Arror from '../src/CommComponet/Arror';
const ClassCompoRouter = React.lazy(() => import('./Component/ClassComponents/ClassCompoRouter'));
const FunctionalCompoRouter = React.lazy(() => import('./Component/FunctionalComponent/FunctionalCompoRoute'));

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
        path: "/product",
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
                        <ClassCompoRouter />
                    </Suspense>,
            },
            {
                path: "functionalcompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRouter /></Suspense>
            },
        ]
    },

]);

export default menrouter;
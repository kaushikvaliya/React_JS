import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Examplepage = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='my-5 display-4'>Example component</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Link to="classcomporouter" className='display-6 text-center d-block'>Class CommComponet </Link>

                    </div>
                    <div className="col-lg-6">

                        <Link to="#" className='display-6 text-center d-block'>Function Component </Link>
                        {/* <Outlet></Outlet> */}
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Examplepage;



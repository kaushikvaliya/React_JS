import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul className='mt-3' style={{ width: "70%", margin: "0 auto" }}>
                        <li className='h4 text-capitalize'><Link to="functionalcompointro">Functional Compo Intro</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompostate">Functional Compo useState</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompouseeffect">Functional Compo UseEffect</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompouseeffectexample">Functional Compo UseEffect Example</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalfompousefallback">Functional Compo useCallback</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalfompousecontext">Functional Compo UseContext</Link></li>
                    </ul>

                </div>
            </div>
            <div className="row">
                <div className="col ">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;
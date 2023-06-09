import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul className='mt-3' style={{ width: "70%", margin: "0 auto" }}>
                        <li className='h4 text-capitalize'><Link to="navbar">Functional Compo Navbar</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompointro">Functional Compo Intro</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompostate">Functional Compo useState</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompostateuseStatewithobject">Functional Compo useState with Object </Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompostateuseStatewitharray">Functional Compo useState with Array </Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompouseeffect">Functional Compo UseEffect</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompouseeffectexample">Functional Compo UseEffect Example</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalfompousefallback">Functional Compo useCallback</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalfompousememo">Functional Compo UseMemo</Link></li>
                        <li className='h4 text-capitalize'><Link to="usecontext">Functional Compo UseContext</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalfompousecontext">Functional Compo UseContext</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompouusereducer">FunctionalCompoUseReducer</Link></li>
                        <li className='h4 text-capitalize'><Link to="functionalcompotodolist">FunctionalCompoTodolist</Link></li>
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
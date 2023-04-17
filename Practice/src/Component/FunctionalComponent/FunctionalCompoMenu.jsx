import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul>
                        <li><Link to="functionalcompointro">Functional Compo Intro</Link></li>
                        <li><Link to="functionalcompostate">Functional Compo State</Link></li>
                        <li><Link to="functionalcompouseeffect">Functional Compo UseEffect</Link></li>
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
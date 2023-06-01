import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminMenu = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const handleThemeToggle = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <>

            <aside id="sidebar" className={isSidebarActive ? 'sidebaractive' : ''}>
                <div className="logo">
                    <div className="img">
                        <img src="https://img.freepik.com/premium-vector/abstract-vk-initials-vector-logo-design-monogram-icon-business-template-simple-elegant_619996-125.jpg?w=360"
                            alt="" />
                    </div>
                </div>
                <div className="header_text">
                    <ul className='ps-0'>
                        <li><Link to='admindashboard'>admindashboard</Link></li>
                        <li><Link to='adminalluser'>adminalluser</Link></li>
                    </ul>
                </div>



            </aside>

            <main id="main" className={isSidebarActive ? 'mainactive' : ''}>
                <header>

                    <nav>
                        <div className="btn_input">

                            <button id="btn" onClick={handleSidebarToggle}>
                                <i className={isSidebarActive ? 'fa fa-bars' : 'fa fa-times'}></i>
                            </button>

                            <input placeholder="Type some text" type="text" />

                        </div>


                        <div className="nav_link">
                            <button id="theme-switch" onClick={handleThemeToggle}>
                                <i className={isDarkTheme ? 'fa fa-2x fa-sun' : 'fa fa-2x fa-moon'}></i>
                            </button>
                            <button><i className="fa-solid fa-2x fa-user"></i></button>
                            {/* <div className="list">
                                <ul>
                                    <li><Link to="#"></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </nav>
                </header>


                <section className='px-2 pt-2'>

                    <Outlet></Outlet>
                </section>
            </main >




        </>
    );
};

export default AdminMenu;
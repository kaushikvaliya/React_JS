import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsMenuOpen(false);
            setIsHeaderActive(true);
        }
        else {
            setIsHeaderActive(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return (
        <>
            <header className={isHeaderActive ? ' headeractive' : ''}>
                <div className="container">
                    <div className="row justify_space_between align_item_center">
                        <div className="col">
                            <div className="logo">
                                <img src="/img/VKLogo-01.png" alt="" />
                            </div>
                        </div>

                        <div className="col">
                            <div className={`header_text ${isMenuOpen ? 'active' : ''}`}>
                                <ul>
                                    <li><a className="dot_active" href="#">home</a></li>
                                    <li><a href="#about">About me</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#work">Work</a></li>
                                    <li><a href="#contact">contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col bar_col">
                            <button className="bar" onClick={handleMenuClick}><i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></button>
                        </div>
                    </div>
                </div>
            </header>

            <section style={{ height: '100vh' }}>
                <div className="container">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora a sint placeat sit hic, mollitia magni laborum dignissimos officiis. Deleniti repudiandae perspiciatis temporibus distinctio aperiam, odit quaerat dolores sapiente aliquid.</p>
                </div>
            </section>
        </>
    );
};

export default Navbar;



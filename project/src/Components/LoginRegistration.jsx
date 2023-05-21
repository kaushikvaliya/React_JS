import React, { useState } from 'react';
import CustomHook from '../Hooks/useCustomHook';


const LoginRegistration = () => {
    const { handleChange, inp, errors } = CustomHook({}, {});
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    function handleSignUpClick() {
        setIsSignUpMode(true);
    }

    function handleSignInClick() {
        setIsSignUpMode(false);
    }





    return (
        <>
            <div className={`loginregistration  ${isSignUpMode ? "sign-up-mode" : ""}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" >
                            <h2 className="title">Sign in</h2>
                            {JSON.stringify(inp)}
                            {JSON.stringify(errors.usernameError)}
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onBlur={handleChange} name="username" placeholder="Username" className='thisrequired' />

                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name='Password' onBlur={handleChange} placeholder="Password" className='thisrequired' />
                            </div>
                            <input type="submit" value="Login" className="button solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>

                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" className='thisrequired' />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" className='thisrequired' />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" className='thisrequired' />
                            </div>
                            <input type="submit" className="button" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="button transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                Sign Up
                            </button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="button transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                Sign In
                            </button>
                        </div>
                        <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginRegistration;
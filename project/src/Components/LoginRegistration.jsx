import React, { useEffect, useState } from 'react';
import CustomHook from '../Hooks/useCustomHook';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const LoginRegistration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const [disperror, setdisperror] = useState(false);
    const navigate = useNavigate()
    const { handleChange, inp, errors } = CustomHook({ role: "2" }, {});
    const [isSignUpMode, setIsSignUpMode] = useState(true);
    const [loginmes, setloginmes] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // Set registration success message



    const [cookies, setCookie, removeCookie] = useCookies(['username', 'id']);

    function handleSignUpClick() {
        setIsSignUpMode(true);
    }

    function handleSignInClick() {
        setIsSignUpMode(false);
    }


    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };


    // const logout = () => {
    //     axios.get(`http://localhost:5000/users?name=${inp.name}&password=${inp.password}`).then((response) => {
    //         removeCookie('username');
    //         // navigate('/loginregistration');
    //     });
    // };

    const savedata = async (event) => {
        event.preventDefault();

        // console.log("save data", inp);
        // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
        //     console.log(result);
        // })
        // console.log("inside name", inp.username);
        // console.log("inside password", inp.password);
        // console.log(inp.Password);
        // console.log(inp);
        try {
            const response = await axios.get(`http://localhost:5000/users?email=${inp.email}&password=${inp.password}`)
                .then((res) => {
                    // console.log(res);
                    if (res.status === 200) {
                        // console.log("server connected");

                        // console.log(res.data.length);
                        if (res.data.length > 0) {
                            setCookie("username", res.data[0].name);
                            setCookie("id", res.data[0].id);

                            if (res.data[0].role == 1) {
                                navigate("/admin/admindashboard");
                            } else {
                                navigate("/userdarshboard");
                            }
                        } else {
                            setloginmes("invalid user");
                            console.log("invalid user");
                        }
                    } else {
                        console.log("error while connecting to server.");
                    }

                }).catch((error) => {
                    console.log(error);
                    // console.log("vvvv", error);
                    setdisperror(true);
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }


    const registration = (event) => {
        event.preventDefault();
        console.log("------------>",)

        // console.log(inp);


        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        fetch("http://localhost:5000/users", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "no-cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inp)
        }).then((res) => res.json()).then((result) => {
            console.log(result);


            setUsername(''); // Clear username input value
            setPassword(''); // Clear password input value
            setemail(''); // Clear email input value
            setConfirmPassword(''); // Clear setConfirmPassword input value

            // Set registration success message
            setRegistrationSuccess('Registration successful');

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setRegistrationSuccess('');
            }, 3000);



        })

    }



    return (
        <>





            {
                disperror ? <> error while conectiong please try after some time </> :
                    <>
                        <Link className='home text-dark' to='/' ><i className='fa fa-home'></i></Link>
                        <div className={`loginregistration  ${isSignUpMode ? "sign-up-mode" : ""}`}>

                            <div className="forms-container">
                                <div className="signin-signup">
                                    <form action="#" className="sign-in-form" onSubmit={savedata} >
                                        <h2 className="title">Sign in</h2>
                                        {/* {JSON.stringify(inp)}
                        {JSON.stringify(errors.usernameError)} */}
                                        <div className="input-field">
                                            <i className="fas fa-user"></i>
                                            <input
                                                type="email"
                                                onBlur={handleChange}
                                                name="email"
                                                placeholder="Email"
                                                className='thisrequired' />

                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                name='password'
                                                onBlur={handleChange}
                                                placeholder="password"
                                                className='thisrequired' />
                                        </div>

                                        <div className="form-check">
                                            <input
                                                required
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={showPassword}
                                                onChange={handleShowPasswordChange}
                                            />
                                            <label className="form-check-label text-dark">
                                                Show Password
                                            </label>
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

                                        {loginmes ? <div className="toast-container position-fixed  end-0 p-3" style={{ bottom: '-80px' }}>
                                            <div id="liveToast" className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                                <div className="toast-header">
                                                    {/* <img src="..." className="rounded me-2" alt="..."/> */}
                                                    <strong className="me-auto">login alert</strong>
                                                    {/* <small>11 mins ago</small> */}
                                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setloginmes("")}></button>
                                                </div>
                                                <div className="toast-body">
                                                    {loginmes}
                                                </div>
                                            </div>
                                        </div> : ""}

                                    </form>

                                    <form action="#" className="sign-up-form" onSubmit={registration}>
                                        <h2 className="title">Sign up</h2>
                                        <div className="input-field">
                                            <i className="fas fa-user"></i>
                                            <input required type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} onBlur={handleChange} className='thisrequired' name='name' />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-envelope"></i>
                                            <input required type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" onBlur={handleChange} className='thisrequired' name='email' />
                                        </div>


                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input
                                                required
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                onBlur={handleChange}
                                                className='thisrequired'
                                                name='password' />
                                        </div>


                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input

                                                type={showPassword ? 'text' : 'password'}
                                                value={confirmPassword}
                                                placeholder="Confirm Password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                onBlur={handleChange}
                                                name="confirmPassword"
                                            />
                                        </div>


                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={showPassword}
                                                onChange={handleShowPasswordChange}
                                            />
                                            <label className="form-check-label text-dark">
                                                Show Password
                                            </label>
                                        </div>
                                        <input type="submit" className="button" value="Sign up" />
                                        <p>{registrationSuccess ? registrationSuccess : ""}</p>
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

                                    {/* <img src="img/log.svg" className="image" alt="" /> */}
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
                                    {/* <img src="img/register.svg" className="image" alt="" /> */}



                                </div>
                            </div>
                        </div>


                    </>
            }

        </>
    );
};

export default LoginRegistration;







// import React, { useState } from 'react';
// import CustomHook from '../Hooks/useCustomHook';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const LoginRegistration = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [dispError, setDispError] = useState(false);
//     const navigate = useNavigate();
//     const { handleChange, inp } = CustomHook({ role: '2' }, {});
//     const [isSignUpMode, setIsSignUpMode] = useState(true);
//     const [loginMessage, setLoginMessage] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const [cookies, setCookie] = useCookies(['username', 'id']);

//     function handleSignUpClick() {
//         setIsSignUpMode(true);
//     }

//     function handleSignInClick() {
//         setIsSignUpMode(false);
//     }

//     const handleShowPasswordChange = () => {
//         setShowPassword(!showPassword);
//     };

//     const savedata = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios
//                 .get(`http://localhost:5000/users?email=${inp.email}&password=${inp.password}`)
//                 .then((res) => {
//                     if (res.status === 200) {
//                         if (res.data.length > 0) {
//                             setCookie('username', res.data[0].name);
//                             setCookie('id', res.data[0].id);

//                             if (res.data[0].role === 1) {
//                                 navigate('/admin/admindashboard');
//                             } else {
//                                 navigate('/userdarshboard');
//                             }
//                         } else {
//                             setLoginMessage('Invalid user');
//                             console.log('Invalid user');
//                         }
//                     } else {
//                         console.log('Error while connecting to the server.');
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     setDispError(true);
//                     if (error.response) {
//                         console.log(error.response);
//                         console.log('Server responded');
//                     } else if (error.request) {
//                         console.log('Network error');
//                     } else {
//                         console.log(error);
//                     }
//                 });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const registration = (event) => {
//         event.preventDefault();

//         if (password !== confirmPassword) {
//             console.log('Passwords do not match');
//             return;
//         }

//         const userData = {
//             name: username,
//             email: email,
//             password: password,
//         };

//         fetch('http://localhost:5000/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);

//                 setUsername('');
//                 setPassword('');
//                 setEmail('');
//                 setConfirmPassword('');
//             });
//     };

//     return (
//         <>
//             {dispError ? (
//                 <>Error while connecting. Please try again later.</>
//             ) : (
//                 <>
//                     <Link className="home text-dark" to="/">
//                         <i className="fa fa-home"></i>
//                     </Link>
//                     <div className={`loginregistration ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//                         <div className="forms-container">
//                             <div className="signin-signup">
//                                 <form action="#" className="sign-in-form" onSubmit={savedata}>
//                                     <h2 className="title">Sign in</h2>
//                                     <div className="input-field">
//                                         <i className="fas fa-user"></i>
//                                         <input
//                                             type="text"
//                                             value={inp.email}
//                                             placeholder="Email"
//                                             onChange={handleChange}
//                                             onBlur={handleChange}
//                                             name="email"
//                                         />
//                                     </div>
//                                     <div className="input-field">
//                                         <i className="fas fa-lock"></i>
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             value={inp.password}
//                                             placeholder="Password"
//                                             onChange={handleChange}
//                                             onBlur={handleChange}
//                                             name="password"
//                                         />
//                                     </div>
//                                     <input type="submit" value="Login" className="btn solid" />
//                                     <p className="login-msg">{loginMessage}</p>
//                                 </form>

//                                 <form action="#" className="sign-up-form" onSubmit={registration}>
//                                     <h2 className="title">Sign up</h2>
//                                     <div className="input-field">
//                                         <i className="fas fa-user"></i>
//                                         <input
//                                             type="text"
//                                             value={username}
//                                             placeholder="Username"
//                                             onChange={(e) => setUsername(e.target.value)}
//                                             onBlur={handleChange}
//                                             name="username"
//                                         />
//                                     </div>
//                                     <div className="input-field">
//                                         <i className="fas fa-envelope"></i>
//                                         <input
//                                             type="email"
//                                             value={email}
//                                             placeholder="Email"
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             onBlur={handleChange}
//                                             name="email"
//                                         />
//                                     </div>
//                                     <div className="input-field">
//                                         <i className="fas fa-lock"></i>
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             value={password}
//                                             placeholder="Password"
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             onBlur={handleChange}
//                                             name="password"
//                                         />
//                                     </div>
//                                     <div className="input-field">
//                                         <i className="fas fa-lock"></i>
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             value={confirmPassword}
//                                             placeholder="Confirm Password"
//                                             onChange={(e) => setConfirmPassword(e.target.value)}
//                                             onBlur={handleChange}
//                                             name="confirmPassword"
//                                         />
//                                     </div>
//                                     <input type="submit" className="btn" value="Sign up" />
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="panels-container">
//                             <div className="panel left-panel">
//                                 <div className="content">
//                                     <h3>New here?</h3>
//                                     <p>Register now and enjoy our services</p>
//                                     <button className="btn transparent" onClick={handleSignUpClick}>
//                                         Sign up
//                                     </button>
//                                 </div>
//                                 <img src="img/log.svg" className="image" alt="" />
//                             </div>
//                             <div className="panel right-panel">
//                                 <div className="content">
//                                     <h3>One of us?</h3>
//                                     <p>Already have an account? Sign in now!</p>
//                                     <button className="btn transparent" onClick={handleSignInClick}>
//                                         Sign in
//                                     </button>
//                                 </div>
//                                 <img src="img/register.svg" className="image" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// };

// export default LoginRegistration;

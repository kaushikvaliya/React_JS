import React, { useState } from 'react';
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



    const [cookies, setCookie, removeCookie] = useCookies(['username', 'id']);

    function handleSignUpClick() {
        setIsSignUpMode(true);
    }

    function handleSignInClick() {
        setIsSignUpMode(false);
    }


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

        })

    }

    return (
        <>

            {/* {
                cookies.username && (
                    <button onClick={logout}>Logout</button>
                )
            } */}



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
                                            <input type="email" onBlur={handleChange} name="email" placeholder="Email" className='thisrequired' />

                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" name='password' onBlur={handleChange} placeholder="password" className='thisrequired' />
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
                                            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} onBlur={handleChange} className='thisrequired' name='name' />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-envelope"></i>
                                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" onBlur={handleChange} className='thisrequired' name='email' />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} onBlur={handleChange} className='thisrequired' name='password' />
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







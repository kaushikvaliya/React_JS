import { event } from 'jquery';
import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const nandan = [
        {
            "id": 1,
            "name": "user",
            "password": "123"
        },
        {
            "id": 2,
            "name": "kaushik",
            "password": "1234"
        },
        {
            "id": 1,
            "name": "test",
            "password": "1238"
        }
    ]

    const dataMacth = (event) => {
        event.preventDefault()
        console.log("user", user);
        
        console.log("password", password);
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)

        // setUser(null)
        // setPassword(null)
    }
    const loginOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("password")
    }
    return (
        <>
            <div className="card">
                <div className="card-body ">
                    <form action="" onSubmit={dataMacth}>
                        <div className="col-6">
                            <input type="text" className='form-control ' onChange={(e) => setUser(e.target.value)} />
                        </div>
                        <div className="col-6 my-3">
                            <input type="password" className='form-control col-6' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type="submit" className='btn btn-primary my-2' />
                    </form>
                </div>
                <div className="col-6 text-center my-5">
                    <button className='btn btn-danger' onClick={loginOut}>login out</button>
                </div>
            </div>
        </>
    );
};

export default Login;
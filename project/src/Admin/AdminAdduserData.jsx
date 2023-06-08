import React, { useState } from 'react';
import CustomHook from '../Hooks/useCustomHook';
import { Link, useNavigate } from 'react-router-dom';


const AdminAdduserData = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate()
    const { handleChange, inp, errors } = CustomHook({ role: "2" }, {});

    const registration = (event) => {
        event.preventDefault();

        // console.log(inp);

        fetch("http://localhost:5000/users", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inp)
        }).then((res) => res.json()).then((result) => {
            // console.log(result);
            setUsername(''); // Clear username input value
            setPassword(''); // Clear password input value
            setemail(''); // Clear email input value

            // Navigate to the desired route
            navigate("/admin/adminalluser");

        })

    }


    return (
        <>
            <form action="#" onSubmit={registration}>


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
                <input type="submit" className="button" value="Save" />



            </form>
        </>
    );
};

export default AdminAdduserData;
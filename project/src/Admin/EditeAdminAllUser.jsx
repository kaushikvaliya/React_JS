import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomHook from '../Hooks/useCustomHook';



const EditeAdminAllUser = () => {
    let { id } = useParams();
    const navigate = useNavigate();


    const [errorMsg, setErrorMsg] = useState(false);
    const [state, setState] = useState({ name: "", password: "", email: "" });
    const { handleChange, updatedData, inp, errors } = CustomHook(state, { name: "" });



    useEffect(() => {
        savedata();
    }, []);


    let handleUpdateBtnClick = async () => {
        console.log("called update", inp);
        const response = await axios.put(`http://localhost:5000/users/${id}`, inp)
            .then((response) => {
                if (response.status == 200) {
                    console.log("server connected", response);
                    setErrorMsg(false)
                    navigate("/admin/adminalluser");
                } else {
                    console.log("error while connecting to the server");
                }
            }).catch((error) => {
                console.log("inside catch", error);
                setErrorMsg(true)
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


    // let dtnClickdelete = async () => {
    //     console.log("called update", inp);
    //     const response = await axios.delete(`http://localhost:5000/users/${id}`, inp)
    //         .then((response) => {
    //             if (response.status == 200) {
    //                 console.log("server connected", response);
    //                 setErrorMsg(false)
    //                 navigate("/admin/adminalluser");
    //             } else {
    //                 console.log("error while connecting to the server");
    //             }
    //         }).catch((error) => {
    //             console.log("inside catch", error);
    //             setErrorMsg(true)
    //             if (error.response) {
    //                 console.log(error.response);
    //                 console.log("server responded");
    //             } else if (error.request) {
    //                 console.log("network error");
    //             } else {
    //                 console.log(error);
    //             }
    //         });
    // }


    const savedata = async (event) => {
        try {
            const res = await axios.get(`http://localhost:5000/users/${id}`)
                .then((res) => {
                    console.log();
                    if (res.status === 200) {
                        console.log(res.data, "updatedData");
                        updatedData(res.data);
                        // setState(res.data);

                    } else {
                        console.log("error while connecting to server.");
                    }

                }).catch((error) => {
                    console.log(error);
                    // console.log("vvvv", error);
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
    return (
        <>



            <div className="proj-admin-card">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="row mt-3">
                                    <div className="col">
                                        {/* {JSON.stringify(inp)} */}
                                        {/* { errorMsg ? "true":JSON.stringify(inp) } */}
                                        <input type="text" className='form-control' placeholder='Enter User Name' value={inp.name} name="name" onChange={handleChange} id="username" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className='form-control' placeholder='Enter User Name' value={inp.password} name="password" onChange={handleChange} id="username" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className='form-control' placeholder='Enter User Name' value={inp.email} name="email" onChange={handleChange} id="username" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="button" className='btn btn-primary' value="Update" name="btn-update" onClick={handleUpdateBtnClick} id="btn-update" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default EditeAdminAllUser;


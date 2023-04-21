import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useCallback, useEffect, useState } from 'react';
const FunctionalCompoUseEffectExample = () => {

    const [formdata, setformdata] = useState({ inputdata: { fname: null, password: null, lname: null } });
    const [formdata1, setformdata1] = useState({});



    useEffect(() => {
        setformdata(() => ({
            inputdata: {}
        }));

    }, [formdata1])


    const inpitdada = (e) => {
        console.log(e.target.value);
        setformdata((data) => ({
            inputdata: { ...data.inputdata, [e.target.name]: e.target.value }
        }))
    }

    var save = (event) => {
        event.preventDefault();
        // console.log(formdata.inputdata);
        setformdata1(formdata.inputdata);
    }


    return (

        <>



            <div className="row">
                <div className="col-lg-6">

                    {JSON.stringify(formdata)}

                    <form action="">
                        <MDBInput className='my-2 d-block' type="text" label="Frist Name" onChange={inpitdada} name="fname" id="title" value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} />
                        <MDBInput className='my-2' type="lname" label="Last name" onChange={inpitdada} name='lname' value={formdata.inputdata.lname ? formdata.inputdata.lname : ""} />
                        <MDBInput className='my-2' type="email" label="Email" onChange={inpitdada} name='email' value={formdata.inputdata.email ? formdata.inputdata.email : ""} />
                        <MDBInput className='my-2' type="password" label="Password" onChange={inpitdada} name='password' value={formdata.inputdata.password ? formdata.inputdata.password : ""} />
                        <MDBBtn type="submit" onClick={save} value="Submit" >Submit</MDBBtn>
                    </form>
                </div>
                <div className="col-lg-6">
                    {JSON.stringify(formdata1)}
                </div>
            </div >

        </>
    );
};

export default FunctionalCompoUseEffectExample;




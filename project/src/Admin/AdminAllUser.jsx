import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUserData = () => {

    const [errorMsg, setErrorMsg] = useState(false);
    const [loader, setLoader] = useState(false);
    const [allUsers, setAllUsers] = useState(false);

    useEffect(() => {
        savedata()
    }, [])




    const savedata = async (event) => {
        try {
            const response = await axios.get("http://localhost:5000/users")
                .then((res) => {
                    if (res.status === 200) {
                        let allUserDataList = ""

                        allUserDataList = Object.entries(res.data).map(([key, value], i) => {
                            // console.log("key", key);
                            // console.log("value", value.name);
                            // console.log("value", value.email);
                            // console.log("value", value.id);
                            // console.log("i", i);
                            return (

                                <tr key={key} >
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.id}</td>
                                </tr>
                            )

                        })


                        setAllUsers(allUserDataList)
                        setLoader(true)












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
            <section>
                <h2 className='text-center my-3'>All user data</h2>
                <table className='w-100 table'>
                    <thead>
                        <tr className='bg-primary text-light'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loader ? allUsers : <tr><td colSpan={5}>no record fund</td></tr>}

                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllUserData;
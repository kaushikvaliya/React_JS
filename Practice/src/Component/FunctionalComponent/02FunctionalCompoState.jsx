import React, { useState } from 'react';

const WelcomeToFunctionalCompo = () => {
    // const [stateNameAnything,setStateData] = useState("0")
    // const [stateNameAnything,setStateData] = useState(0)
    const [stateNameAnything,setStateData] = useState(true)
    // const [stateNameAnything,setStateData] = useState("something")
    let data = "Test"
    const BtnClicked = ()=> {
        console.log("btn clicked");
        data = "Update"
        // setStateData("data")
        // setStateData(stateNameAnything+1)
        setStateData(!stateNameAnything)
        console.log(!stateNameAnything);
    }
    return (
        <>
            {data}
            <p>State Data : { JSON.stringify(stateNameAnything) }</p>
            <div>{ stateNameAnything ? <h2>On</h2> : <h2>Off</h2> }</div>
            <p>Welcome to functional Component in reactjs</p>
            <button onClick={BtnClicked}>Click</button>
        </>
    );
};

export default WelcomeToFunctionalCompo;
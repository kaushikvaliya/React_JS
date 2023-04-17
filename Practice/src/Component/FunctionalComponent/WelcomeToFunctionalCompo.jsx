import React from 'react';

const WelcomeToFunctionalCompo = () => {
    let data = "Test"
    const BtnClicked = ()=> {
        console.log("btn clicked");
        data = "Update"
    }
    return (
        <>
            {data}
            <p>Welcome to functional Component in reactjs</p>
            <button onClick={BtnClicked}>Click</button>
        </>
    );
};

export default WelcomeToFunctionalCompo;
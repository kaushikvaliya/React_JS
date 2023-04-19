import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

const FunctionalCompoState = () => {
    const [stateName, setstsct] = useState(true);
    const [stateName2, setstsct2] = useState(true);
    let btnclick = () => {
        console.log("called");
        setstsct(!stateName);
        console.log(JSON.stringify(stateName));
        setstsct2(!stateName2)
    }
    return (
        <>
            <div>{stateName ? <div style={{ width: "10%" }} className='text-center'><img style={{ width: "100%", display: "block" }} src="https://i.postimg.cc/6QyTynzr/bulb-on.png" alt="" /> <br /> <p>on</p></div> : <div style={{ width: "10%" }} className='text-center' ><img style={{ width: "100%", display: "block" }} src="https://i.postimg.cc/KjK1wL3c/bulb-off.png" alt="" /> <br /> <p>off</p></div>}</div>
            <MDBBtn className='my-5' onClick={btnclick}>Click</MDBBtn>



        </>
    );
};

export default FunctionalCompoState;
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

const FunctionalCompoState = () => {
    const [stateName, setstsct] = useState(true);
    let btnclick = () => {
        console.log("called");
        setstsct(!stateName);
        console.log(JSON.stringify(stateName));
    }
    return (
        <>
            <div>{stateName ? <img style={{ width: "10%", display: "block" }} src="https://i.postimg.cc/6QyTynzr/bulb-on.png" alt="" /> : <img style={{ width: "10%", display: "block" }} src="https://i.postimg.cc/KjK1wL3c/bulb-off.png" alt="" />}</div>
            <MDBBtn className='my-5' onClick={btnclick}>Click</MDBBtn>

        </>
    );
};

export default FunctionalCompoState;
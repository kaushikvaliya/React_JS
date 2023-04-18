import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {

    const [stateNameAnything, aajebiju] = useState(true);

    useEffect(() => {
        console.log("called");
    }, []);

    const BtnClicked = () => {
        console.log("BtnClicked");
        aajebiju(!stateNameAnything)
    }
    return (
        <>
            <p>UseEffect Hook</p>
            <div>{stateNameAnything ? <p> kaushik</p> : <p> valiya</p>}</div>

            <MDBBtn onClick={BtnClicked}>Click</MDBBtn>
        </>
    );
};

export default FunctionalCompoUseEffect;
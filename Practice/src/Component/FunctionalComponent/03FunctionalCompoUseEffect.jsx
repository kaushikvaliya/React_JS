import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [stateNameAnything,aajebiju] = useState(true)
    useEffect(()=>{
        console.log("called");
    })
    const BtnClicked = ()=> {
        console.log("BtnClicked");
        aajebiju(!stateNameAnything)
    }
    return (
        <>
          <p>UseEffect Hook</p>  
          <button onClick={BtnClicked}>Click</button>
        </>
    );
};

export default FunctionalCompoUseEffect;
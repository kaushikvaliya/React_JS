import React, { useState } from 'react';

const FunctionalCompostateuseStatewithobject = () => {

    const [allvalues, setvalue] = useState({ Fristname: 'kaushik', Lastname: 'valiya' });

    const updatename = () => {
        // this name is update name and last name are not show in screen
        // this probalm sol is Spread Operator  
        // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

        // setvalue({ Fristname: 'vivek' });

        // then write the update  Fristname ans show the lastname

        setvalue({ ...allvalues, Fristname: 'vivek' });
    }


    return (
        <>

            {/* simpal print in name  */}
            <p>Frist Name is {allvalues.Fristname} and  Last name is {allvalues.Lastname}</p>
            <button className='btn' onClick={updatename}>Submit</button>
        </>
    );
};

export default FunctionalCompostateuseStatewithobject;
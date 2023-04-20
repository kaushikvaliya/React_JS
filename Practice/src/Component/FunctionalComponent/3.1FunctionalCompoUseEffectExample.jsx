import React, { useCallback, useEffect, useState } from 'react';
const FunctionalCompoUseEffectExample = () => {

    const [formdata, setformdata] = useState({ inputdata: { fname: null, password: null } });
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


            {JSON.stringify(formdata1)}
            {JSON.stringify(formdata)}
            <form action="">
                {/* value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} */}
                <input type="text" onChange={inpitdada} name="fname" id="title" value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} />
                <input type="password" onChange={inpitdada} name='password' value={formdata.inputdata.password ? formdata.inputdata.password : ""} />
                <input type="submit" onClick={save} value="Submit" />

            </form>
        </>
    );
};

export default FunctionalCompoUseEffectExample;





// import React, { useState, useCallback, useMemo } from 'react'
// var funccount = new Set();
// const App = () => {


//     const [count, setCount] = useState(0)
//     const [number, setNumber] = useState(0)



//     const incrementCounter = useCallback(() => {
//         setCount(count + 1)
//     }, [count])
//     const decrementCounter = useCallback(() => {
//         setCount(count - 1)
//     }, [count])



//     const incrementNumber = useCallback(() => {
//         setNumber(number + 1)
//     }, [number])

//     funccount.add(incrementCounter);
//     funccount.add(decrementCounter);
//     funccount.add(incrementNumber);
//     console.log(funccount.size);

//     return (
//         <div>
//             Count: {count}
//             <button onClick={incrementCounter}>
//                 Increase counter
//             </button>
//             <button onClick={decrementCounter}>
//                 Decrease Counter
//             </button>
//             <button onClick={incrementNumber}>
//                 increase number
//             </button>
//         </div>
//     )
// }


// export default App;



// import React, { useState, useMemo } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState('');

//     const expensiveValue = useMemo(() => {
//         console.log('Computing expensive value...');
//         let result = '';
//         for (let i = 0; i < count; i++) {
//             // result += value;
//             result = result + value;
//         }
//         return result;
//     }, [count, value]);

//     function handleCountChange(event) {
//         setCount(Number(event.target.value));
//     }

//     function handleValueChange(event) {
//         setValue(event.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <label>Count: </label>
//                 <input type="number" value={count} onChange={handleCountChange} />
//             </div>
//             <div>
//                 <label>Value: </label>
//                 <input type="text" value={value} onChange={handleValueChange} />
//             </div>
//             <div>
//                 <label>Expensive Value: </label>
//                 {expensiveValue}
//             </div>
//         </div>
//     );
// }

// export default MyComponent;
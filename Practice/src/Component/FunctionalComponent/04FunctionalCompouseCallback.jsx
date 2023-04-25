

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


import React, { useCallback, useState } from 'react';
import Child from './Child.jsx';

let funcon = new Set()
const FunctionalCompoUseEffectExample = () => {

    const [count, setCount] = useState(0);


    const [chcount, chsetCount] = useState(0);



    // aa function child ne mokaliyu che

    // const kaushik = () => {
    //     // game a opareshn 
    // }

    const btncliclchildererender = useCallback(() => {
        console.log("usecallback");
        chsetCount(chcount + 2)
        // game a opareshn 
        // [chcount] aa child nii undar kai chrnj thshe tyare  re render thashe diapedesis
    }, [chcount])


    const btnclicl = () => {
        setCount(count + 1);
    }


    funcon.add(btncliclchildererender)

    return (
        <>
            <p>The useCallback Hook only runs when one of its dependencies update.</p>
            <p>The useCallback and useMemo Hooks are similar. The main difference is
                that useMemo returns a memoized value and useCallback returns a memoized function.</p>

            <h2> {count}</h2>
            <button onClick={btnclicl}>add number</button>

            {/* function passs in chail compo */}
            <Child btnclickchlid={btncliclchildererender} chcount={chcount}></Child>
            {/* <Child></Child> */}
        </>
    );
};

export default FunctionalCompoUseEffectExample;


// import { useState, useCallback } from 'react';
// import Child from './Child';

// function FunctionalCompoUseEffectExample() {
//     const [parentData, setParentData] = useState(["parent data"]);
//     const [chilData, setChilData] = useState(["child data"]);

//     const addParentData = () => {
//         setParentData([...parentData, "new parent data"]);
//     }

//     const addChildData = useCallback(() => {
//         setChilData([...chilData, "new child data"]);
//     }, [chilData])

//     console.log("Parent component render...");
//     return (
//         <div className="parent-component">
//             <div>
//                 <h2>Parent Component Data:</h2>
//                 {
//                     parentData.map(
//                         (data, index) => <p key={index}>{data} {index + 1}</p>
//                     )
//                 }
//                 <button onClick={addParentData}>Add parent data</button>
//             </div>
//             <div>
//                 <Child chilData={chilData} addChildData={addChildData} />
//             </div>
//         </div>
//     );
// }

// export default FunctionalCompoUseEffectExample;
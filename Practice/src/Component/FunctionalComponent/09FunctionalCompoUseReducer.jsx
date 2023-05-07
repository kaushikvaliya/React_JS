// import React, { useReducer } from 'react';

// const FunctionalCompoUseReducer = () => {


//     const initialState = 0;

//     const reducer = (initialState, action) => {
//         switch (action) {
//             case "increment":
//                 return initialState + 1;
//             case "decrement":
//                 return initialState - 1;
//             case "reset":
//                 return 0;
//             default:
//                 throw new Error("Unexpected action");
//         }
//     };
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>

//             <div className="box">
//                 <h4>{count}</h4>

//                 <div className="btn_wrapper">

//                     <button className='btn' onClick={() => dispatch("increment")}>
//                         increment
//                     </button>

//                     <button className='btn' onClick={() => dispatch("decrement")}>
//                         decrement
//                     </button>

//                     <button className='btn' onClick={() => dispatch("reset")}>
//                         reset
//                     </button>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default FunctionalCompoUseReducer;



// import React, { useRef } from 'react';

// const FunctionalCompoUseReducer = () => {
//     const inputRef = useRef(null);

//     const handleClick = () => {
//         inputRef.current.focus();
//         console.log("calld");
//     };
//     var a = 11;
//     return (
//         <>
//             {a}
//             <div>
//                 <input type="text" ref={inputRef} />
//                 <button onClick={handleClick}>Focus Input</button>
//             </div>
//         </>
//     );
// };

// export default FunctionalCompoUseReducer;





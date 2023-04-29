// import React, { useMemo, useState } from "react";

// const FunctionalCompoUseMemo = () => {
//     const [wordIndex, setWordIndex] = useState(0);
//     const words = ["hey", "this", "is", "cool"];
//     const word = words[wordIndex];
//     const computeLetterCount = (word) => {
//         console.log("computeLetterCount", word);
//         let i = 0;
//         while (i < 100000) i++;
//         return word.length;
//     }
//     // const letterCount =useMemo(()=> computeLetterCount(word))
//     const letterCount = computeLetterCount(word)

//     return (
//         <>
//             <p>
//                 "{word}" has {letterCount} letters
//             </p>
//             <p>
//                 {word}  {computeLetterCount(wordIndex)}
//                 <button onClick={() => {

//                     if (wordIndex + 1 === words.length) {
//                         setWordIndex(0);
//                     } else {
//                         setWordIndex(wordIndex + 1);
//                     }
//                     // const next = wordIndex + 1 === words.length ? setWordIndex(0) : setWordIndex(wordIndex + 1);
//                     // setWordIndex(next);
//                 }}>
//                     Click
//                 </button>
//             </p>
//         </>
//     )
// }

// export default FunctionalCompoUseMemo;


import React, { createContext, useMemo, useState } from 'react';

const FunctionalCompoUseMemo = () => {
    const [add, setadd] = useState(0);
    const [sub, setsub] = useState(0);

    const addition = () => {

        setadd(add + 1)
    }
    const subtraction = () => {
        setsub(sub - 1)
    }



    // const multiplication = () => {
    //     console.log("multiplication");
    //     return add * 10;
    // }



    const multiplication = useMemo(
        () => {
            console.log("multiplication");
            return add * 10;
        },
        [add]
    )


    return (
        <>

            {multiplication} <br />


            <button onClick={addition}>Addition</button> <span>{add}</span>  <br />
            <button onClick={subtraction}>substration</button> <span>{sub}</span>

        </>
    );
};

export default FunctionalCompoUseMemo;
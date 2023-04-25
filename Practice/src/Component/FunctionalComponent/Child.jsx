import React, { memo } from 'react';

const Child = ({ btnclickchlid, chcount }) => {

    console.log("child compo");
    return (
        <div>
            <h2> {chcount}</h2>
            <button onClick={btnclickchlid}>add number</button>

        </div>
    );
};

export default memo(Child);


// import React, { memo } from "react";

// const Child = ({ chilData, addChildData }) => {
//     console.log("Child component render...");
//     return (
//         <div className="child-component">
//             <h2>Child Component Data:</h2>
//             {
//                 chilData.map(
//                     (data, index) => <p key={index}>{data} {index + 1}</p>
//                 )
//             }
//             <button onClick={addChildData}>Add child data</button>
//         </div>
//     );
// };

// export default memo(Child);
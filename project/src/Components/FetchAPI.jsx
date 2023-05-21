

import React, { useState, useEffect } from 'react';

const FetchAPI = () => {
    const [data, setData] = useState();
    const [loddata, setlodData] = useState(false);

    useEffect(() => {
        Fetchaallusersdata();
    }, []);


    const Fetchaallusersdata = async () => {
        var recpos = await fetch("https://justjayapi.000webhostapp.com/allusers")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setlodData(true);
            });
    };

    var fetchData = ""

    if (loddata) {
        fetchData = Object.entries(data.Data).map(([key, value], i) => {
            console.log(value.username);
            console.log(key, " key ");
            return <>
                <li key={key}>
                    {value.username}
                </li>
            </>
        });
    } else {
        fetchData = <>lodinf</>
    }

    return (
        <div>
            {fetchData}
            <h1>api</h1>
        </div>
    );
};

export default FetchAPI;


// import React, { useEffect, useState } from "react";

// function App() {
//   const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

//   useEffect(() => {
//     fetchData();
//   },[])

//   return (
//     <main>
//       <h1>User List</h1>
//       <ul>
//         {user && user.length > 0 && user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </main>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';

// const FetchAPI = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//             .then((response) => response.json())
//             .then((result) => {
//                 console.log(result);
//                 setData(result);
//             });
//     }, []);

//     let fechdata = data.map((val, index) => {
//         return (
//             <tr style={{ border: '1px solid black' }} key={index}>
//                 <td style={{ border: '1px solid black', padding: "10px" }} >{val.id}</td>
//                 <td style={{ border: '1px solid black', textAlign: "center", padding: "10px" }}>{val.userId}</td>
//                 <td style={{ border: '1px solid black', padding: " 0 10px" }}>{val.title}</td>
//                 <td style={{ border: '1px solid black', textAlign: "center" }}>{JSON.stringify(val.completed)}</td>
//             </tr>
//         );
//     });

//     return (
//         <div>
//             <table style={{ border: '1px solid black', width: "100%" }}>
//                 {fechdata}
//             </table>
//         </div>
//     );
// };

// export default FetchAPI;







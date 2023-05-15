

// import React, { useState, useEffect } from 'react';

// const FetchAPI = () => {
//     const [data, setData] = useState();
//     const [loddata, setlodData] = useState(false);

//     useEffect(() => {
//         Fetchaallusersdata();
//     }, []);
    
//     const Fetchaallusersdata = async ()=>{
//       var recpos = await fetch("https://justjayapi.000webhostapp.com/allusers")
//         .then((response) => response.json())
//         .then((result) => {
//             setData(result);
//             setlodData(true);
//         });
//     };

//     var fetchData =""

//     if (loddata) {
//          fetchData = Object.entries(data.Data).map(([key,value],i) => {
//             console.log(value.username);
//             console.log(key ," key " );
//             return <>   
//             <li key={key}>
//                {value.username}
//             </li>
//             </>
//         });
//     } else{
//         fetchData = <>lodinf</> 
//     }

//     return (
//         <div>
//             {fetchData}
//             <h1>api</h1>
//         </div>
//     );
// };

// export default FetchAPI;


import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;



// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  

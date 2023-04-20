// import { MDBBtn } from 'mdb-react-ui-kit';
// import React, { useEffect, useState } from 'react';

// const FunctionalCompoUseEffect = () => {
//     const [state, setstate] = useState(0)
//     const [number, setnumber] = useState(0)


//     // secound arrgurment ma je state pase kariyu tee state par depend rese 
//     useEffect(() => {
//         console.log(" useEffect called");
//         // document.title = `count ${state}`'
//         // setstate(11)
//         // setnumber(111)
//         // return (() => {
//         //     alert("bar nikadi gaya ");
//         // })
//     }, [number])

//     let btnclicked2 = () => {
//         console.log("btnclicked");
//         // setstate(state + 2)
//         setnumber(number + 1)
//     }

//     // useEffect(() => {
//     //     console.log(" useEffect called");
//     //     document.title = `number ${number}`
//     // }, [number])



//     // let btnclicked = () => {
//     //     console.log("btnclicked");
//     //     setstate(state + 2)
//     // }


//     return (
//         <>
//             <p>count :{state}</p>
//             <p>number :{number}</p>
//             {/* <MDBBtn onClick={btnclicked}>Click incre</MDBBtn> */}
//             <br />
//             <br />
//             <MDBBtn onClick={btnclicked2}>Click number</MDBBtn>
//             <br />
//             <br />


//         </>
//     );
// };

// export default FunctionalCompoUseEffect;





// import { MDBBtn } from 'mdb-react-ui-kit';
// import React, { useEffect, useState } from 'react';

// const FunctionalCompoUseEffect = () => {

//     const [stateNameAnything, aajebiju] = useState(true);

//     useEffect(() => {
//         console.log("called");
//     }, []);

//     const BtnClicked = () => {
//         console.log("BtnClicked");
//         aajebiju(!stateNameAnything)
//     }
//     return (
//         <>
//             <p>UseEffect Hook</p>
//             <div>{stateNameAnything ? <p> kaushik</p> : <p> valiya</p>}</div>

//             <MDBBtn onClick={BtnClicked}>Click</MDBBtn>
//         </>
//     );
// };

// export default FunctionalCompoUseEffect;




import React from 'react';

const FunctionalCompoUseEffect = () => {

    const [todo, setTodo] = React.useState(null);
    const [id, setId] = React.useState(1);
    React.useEffect(() => {
        if (id == null || id === '') {
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(results => results.json())
            .then(data => {
                setTodo(data);
            });
    }, [id]); // useEffect will trigger whenever id is different.
    return (
        <>
            <div>
                <input value={id} onChange={e => setId(e.target.value)} />
                <br />
                <pre>{JSON.stringify(todo, null, 2)}</pre>
            </div>
        </>
    );
};

export default FunctionalCompoUseEffect;
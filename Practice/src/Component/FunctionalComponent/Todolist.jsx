
import React, { useState } from 'react';

const FunctionalCompoUseReducer = () => {

    const [data, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const handleSubmit = e => {
        e.preventDefault();
        // addTask(data)
        setTasks([...tasks, { data }])
        setValue("");
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <>
            <div style={{ margin: "50px 0" }}>
                <form >
                    <input
                        type="text"
                        value={data}
                        placeholder="Enter a title for this task…"
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">submit</button>
                </form>


                <div>
                    {tasks.map((taskvalue, index) => (

                        <div key={index} >
                            <span key={index} >
                                {/* {JSON.stringify(taskvalue.data)} <br /> */}
                                {taskvalue.data}
                            </span>
                            <button onClick={() => removeTask(index)}>delet</button>
                        </div>
                    ))}


                </div>
            </div>


        </>
    );
};

export default FunctionalCompoUseReducer;


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






// import React, { useState } from 'react';

// const FunctionalCompoUseReducer = () => {

//     const [data, setData] = useState("");
//     const [tasks, setTasks] = useState([]);
//     const [editing, setEditing] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);
//     const [editValue, setEditValue] = useState("");

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!editing) {
//             setTasks([...tasks, { data }]);
//             setData("");
//         } else {
//             const newTasks = [...tasks];
//             newTasks[editIndex].data = editValue;
//             setTasks(newTasks);
//             setEditing(false);
//             setEditIndex(null);
//             setEditValue("");
//         }
//     };

//     const removeTask = index => {
//         const newTasks = [...tasks];
//         newTasks.splice(index, 1);
//         setTasks(newTasks);
//     };

//     const handleEdit = index => {
//         setEditing(true);
//         setEditIndex(index);
//         setEditValue(tasks[index].data);
//     }

//     return (
//         <>
//             <div style={{ margin: "50px 0" }}>
//                 <form >
//                     <input
//                         type="text"
//                         value={editing ? editValue : data}
//                         placeholder="Enter a title for this task…"
//                         onChange={e => {
//                             if (editing) {
//                                 setEditValue(e.target.value)
//                             } else {
//                                 setData(e.target.value)
//                             }
//                         }}
//                     />
//                     <button onClick={handleSubmit} type="submit">{editing ? "Save" : "Add"}</button>
//                 </form>


//                 <div>
//                     {tasks.map((taskvalue, index) => (

//                         <div key={index} >
//                             <span key={index} >
//                                 {taskvalue.data}
//                             </span>
//                             <button onClick={() => removeTask(index)}>Delete</button>
//                             <button onClick={() => handleEdit(index)}>Edit</button>
//                         </div>
//                     ))}


//                 </div>
//             </div>


//         </>
//     );
// };

// export default FunctionalCompoUseReducer;
















// import React, { useState } from "react";

// function App() {
//     const [items, setItems] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const [editValue, setEditValue] = useState("");
//     const [editItemId, setEditItemId] = useState(null);

//     const addItem = () => {
//         const newItems = [
//             ...items,
//             { id: items.length + 1, name: inputValue, isEditing: false },
//         ];
//         setItems(newItems);
//         setInputValue("");
//     };

//     const deleteItem = (id) => {
//         const filteredItems = items.filter((item) => item.id !== id);
//         setItems(filteredItems);
//     };

//     const editItem = (id, newName) => {
//         const newItems = items.map((item) => {
//             if (item.id === id) {
//                 return { ...item, name: newName, isEditing: false };
//             } else {
//                 return item;
//             }
//         });
//         setItems(newItems);
//         setEditItemId(null);
//     };

//     const toggleEdit = (id) => {
//         const newItems = items.map((item) => {
//             if (item.id === id) {
//                 return { ...item, isEditing: !item.isEditing };
//             } else {
//                 return item;
//             }
//         });
//         setItems(newItems);
//         setEditItemId(id);
//         setEditValue("");
//     };

//     return (
//         <div>
//             <h1>CRUD Example</h1>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button onClick={addItem}>Add Item</button>
//             <ul>
//                 {items.map((item) => (
//                     <li key={item.id}>
//                         {item.isEditing ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={editValue}
//                                     onChange={(e) => setEditValue(e.target.value)}
//                                 />
//                                 <button onClick={() => editItem(item.id, editValue)}>
//                                     Save
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 {item.name}
//                                 <button onClick={() => toggleEdit(item.id)}>Edit</button>
//                                 <button onClick={() => deleteItem(item.id)}>Delete</button>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;






// import { MDBBtn } from 'mdb-react-ui-kit';
// import React, { useState } from 'react';

// const TodolistExampleForEdit = () => {
//     const [data, setvalue] = useState("");
//     const [Listdata, setlistdata] = useState([]);
//     const [editIndex, setEditIndex] = useState(-1);
//     const [editValue, setEditValue] = useState("");


//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (editIndex === -1) {
//             // Adding a new task
//             setlistdata([...Listdata, { data: data }]);
//         } else {
//             // Updating an existing task
//             const updatedTasks = [...Listdata];
//             updatedTasks[editIndex].data = editValue;
//             setlistdata(updatedTasks);
//             setEditIndex(-1); // Reset editIndex after updating
//             setEditValue(""); // Reset editValue after updating
//         }
//         setvalue("");
//     };

//     const editTask = (index) => {
//         const task = Listdata[index];
//         setEditIndex(index);
//         setEditValue(task.data);
//     };
//     const removetask = (index) => {
//         const newtask = [...Listdata];
//         newtask.splice(index, 1);
//         setlistdata(newtask);
//     }

//     return (
//         <>
//             <form action="" method="post">
//                 <input type="text"
//                     placeholder='Enter Name'
//                     value={data}
//                     onChange={(e) => {
//                         setvalue(e.target.value)
//                     }} />

//                 < button button type="submit"
//                     className='mx-3'
//                     onClick={onSubmit} >
//                     submit</button>
//             </form >
//             <p className='mt-5'>Heding Of List</p>


//             {/* map 2 value Accpet kre 1=Data;2=index(key) */}
//             {
//                 Listdata.map((taskvalue, index) => (
//                     <div className='' key={index}>
//                         {editIndex === index ? (
//                             <input
//                                 type="text"
//                                 placeholder='Enter New Value'
//                                 value={editValue}
//                                 onChange={(e) => setEditValue(e.target.value)}
//                             />
//                         ) : (
//                             <span key={index}>
//                                 <ul>
//                                     <li>{taskvalue.data}</li>
//                                     {/* <li>{taskvalue.newData}</li> */}
//                                 </ul>
//                             </span>
//                         )};
//                         {editIndex === index ? (
//                             // <MDBBtn onClick={() => onSubmit()} className="mx-3">Save</MDBBtn>
//                             <MDBBtn onClick={onSubmit} className="mx-3">Save</MDBBtn>
//                         ) : (
//                             <>
//                                 <MDBBtn onClick={() => editTask(index)}>Edit</MDBBtn>
//                                 <MDBBtn onClick={() => removetask(index)}>Delete</MDBBtn>
//                             </>
//                         )};
//                     </div >
//                 ))
//             }
//         </>
//     );
// };



// export default TodolistExampleForEdit;
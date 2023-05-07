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



// import React, { useState } from 'react';

// function TodoList() {
//     const [todos, setTodos] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const handleAddTodo = () => {
//         if (!inputValue) return;
//         const newTodo = {
//             id: new Date().getTime(),
//             text: inputValue,
//         };
//         setTodos([...todos, newTodo]);
//         setInputValue('');
//     };

//     const handleDeleteTodo = (id) => {
//         setTodos(todos.filter((todo) => todo.id !== id));
//     };

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Add todo"
//             />

//             <button onClick={handleAddTodo}>Add</button>



//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         {todo.text}
//                         <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>



//         </div>
//     );
// }

// export default TodoList;



// const { useState } = React;

// const AddTaskForm = ({ addTask }) => {
//     const [value, setValue] = useState("");

//     const handleSubmit = e => {
//         e.preventDefault();
//         value && addTask(value)
//         setValue("");
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={value}
//                 placeholder="Enter a title for this task…"
//                 onChange={e => setValue(e.target.value)}
//             />
//             <button type="submit"><i class="fas fa-plus"></i></button>
//         </form>
//     );
// }

// const ToDoList = () => {
//     const [tasks, setTasks] = useState([])


//     const addTask = text => setTasks([...tasks, { text }]);

//     const toggleTask = index => {
//         const newTasks = [...tasks];
//         newTasks[index].isCompleted = !newTasks[index].isCompleted;
//         setTasks(newTasks);
//     };

//     const removeTask = index => {
//         const newTasks = [...tasks];
//         newTasks.splice(index, 1);
//         setTasks(newTasks);
//     };

//     return (
//         <div className="todo-list">
//             {tasks.map((task, index) => (
//                 <div className="todo">
//                     <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
//                         {task.text}
//                     </span>
//                     <button onClick={() => removeTask(index)}><i class="fas fa-trash-alt"></i></button>
//                 </div>
//             ))}
//             <AddTaskForm addTask={addTask} />
//         </div>
//     );
// }

// ReactDOM.render(<ToDoList />, document.getElementById('app'));


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
                            {JSON.stringify(taskvalue.data)} <br />
                            {taskvalue.data}
                        </span>
                        <button onClick={() => removeTask(index)}>delet</button>
                    </div>
                ))}


            </div>

        </>
    );
};

export default FunctionalCompoUseReducer;


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

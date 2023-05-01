import React, { useReducer } from 'react';

const FunctionalCompoUseReducer = () => {


    const initialState = 0;

    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "reset":
                return 0;
            default:
                throw new Error("Unexpected action");
        }
    };
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>

            <div className="box">
                <h4>{count}</h4>

                <div className="btn_wrapper">

                    <button className='btn' onClick={() => dispatch("increment")}>
                        increment
                    </button>

                    <button className='btn' onClick={() => dispatch("decrement")}>
                        decrement
                    </button>

                    <button className='btn' onClick={() => dispatch("reset")}>
                        reset
                    </button>
                </div>
            </div>

        </>
    );
};

export default FunctionalCompoUseReducer;


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


import React, { useState } from 'react';

const FunctionalCompostateuseStatewithArray = () => {
    const [items, setitem] = useState([]);
    const additem = () => {
        setitem([...items,
        {
            index: items.length,
            value: "kaushik"

        }])
    }
    return (
        <>
            <h1>useState Hook with Array </h1>

            <div className="my-5">

                <ul >
                    {items.map(item => (
                        <li key={item.index}> {item.value} </li>
                    ))}

                </ul>

                <button className='btn' onClick={additem}>Add item</button>
            </div>

        </>
    );
};

export default FunctionalCompostateuseStatewithArray;
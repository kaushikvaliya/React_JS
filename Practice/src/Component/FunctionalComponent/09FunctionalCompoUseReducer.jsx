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
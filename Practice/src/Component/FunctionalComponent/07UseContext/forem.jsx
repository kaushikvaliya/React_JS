import React from 'react';
import { useContext } from "react";
import { DarkModeContext } from "./Context";
const Forem = () => {
    const darkMode = useContext(DarkModeContext);
    const className = 'kaushik-' + darkMode;

    // console.log(className);
    return (
        <div className={className}>
            <section className='py-5'>
                <main>
                    <h2>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                        quod?
                    </p>
                </main>

                <form action="">
                    <input type="text" />
                    <button type="submit">submit</button>
                </form>
            </section >
        </div>
    );
};

export default Forem;




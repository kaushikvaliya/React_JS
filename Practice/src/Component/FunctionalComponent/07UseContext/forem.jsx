import React from 'react';
import { useContext } from "react";
import { DarkModeContext } from "./Context";

const Forem = () => {
    const darkMode = useContext(DarkModeContext);
    const className = 'kaushik-' + darkMode;
    console.log(className);
    return (
        <>

            {/* <section style={{ backgroundColor: darkMode ? "#000" : "#fff" }}> */}
            <section className={className}>

                <main>
                    <h2>
                        Get the <span>right job</span> you deserve
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
            </section>
        </>
    );
};

export default Forem;




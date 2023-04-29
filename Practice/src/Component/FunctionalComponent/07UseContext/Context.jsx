import { useState } from "react";
import { createContext } from "react";
export const DarkModeContext = createContext();
const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState("light");
    console.log(children);
    return (
        <>
            <DarkModeContext.Provider value={[darkMode]}>

                {children}
                {JSON.stringify(darkMode)}
                <div className="wrapper">
                    <input
                        type="checkbox"
                        checked={darkMode === 'dark'}
                        onChange={(e) => {
                            setDarkMode(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    <p>Use dark mode</p>
                </div>



                {/* <div class="wrapper">
                    <input type="checkbox" />
                </div> */}

            </DarkModeContext.Provider >

        </>
    );
};

export default DarkModeProvider;

{/* {!darkMode ? (
//                 <i style={{
//                     marginRight: "16px",
//                     cursor: "pointer",
//                     position: "absolute",
//                     right: "40px",
//                     bottom: "40px",
//                 }}
//                     onClick={() => setDarkMode(true)}
//                     class="fa-solid fa-2x fa-sun"></i>

//             ) : (



//                 <i onClick={() => {
//                     setDarkMode(false);
//                 }}
//                     style={{
//                         cursor: "pointer",
//                         position: "absolute",
//                         right: "40px",
//                         bottom: "40px",
//                         color: "#ffff",
//                     }} class="fa-solid fa-2x fa-moon"></i>

//             )
//             } */}
import { useState } from "react";
import { createContext } from "react";
const DarkModeContext = createContext();
const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState("light");
    return (
        <>
            <DarkModeContext.Provider value={[darkMode]}>
                {children}

                <label>
                    <input
                        type="checkbox"
                        checked={darkMode === 'dark'}
                        onChange={(e) => {
                            setDarkMode(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    Use dark mode
                </label>
            </DarkModeContext.Provider >

        </>
    );
};

export default DarkModeProvider;

export { DarkModeContext }




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
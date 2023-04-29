import React from 'react';
import DarkModeProvider from "./Context";
import Forem from "./forem";

const FunctionalCompoUseContext = () => {
    return (
        <DarkModeProvider>
            <Forem></Forem>
        </DarkModeProvider>
    );
};

export default FunctionalCompoUseContext;
import React from 'react';
import Form from './form.jsx'
import DarkModeProvider from "./context.jsx"

const LoginCompo = () => {
    return (
        <>
            <DarkModeProvider>
                <Form></Form>
            </DarkModeProvider>
        </>
    );
};

export default LoginCompo;
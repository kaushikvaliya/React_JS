import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const FunctionalCompoUseContext = () => {
    const [theme, setTheme] = useState('light');

    return (
        <>
            {JSON.stringify(theme)}
            <ThemeContext.Provider value={theme}>
                <Form />
                <label>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    Use dark mode
                </label>
            </ThemeContext.Provider>
        </>
    );
};
function Form({ children }) {
    return (
        <Panel title="Welcome">
            anything
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}

function Panel(props) {
    const { title, children } = props
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    // const className = 'panel-dark';
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default FunctionalCompoUseContext;
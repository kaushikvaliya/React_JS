import React, { Component } from 'react';

class ClassCompoConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: "dark" }
    }

    changethemedark = () => {
        this.setState({ theme: "dark" })
    }
    changethemelight = () => {
        this.setState({ theme: "light" })
    }
    changethemelight = () => {
        this.setState({ theme: "light" })
    }
    toggleTheme = () => {
        if (this.state.theme == "dark") {
            this.setState({ theme: "light" })
        } else {
            this.setState({ theme: "dark" })
        }
    }

    render() {
        // let ThemeDarkData = ""
        // if (this.state.theme == "dark") {
        //     ThemeDarkData = <div className="dark">This will display dark theme data</div>
        // } else {
        //     ThemeDarkData = <div className="light">This will display light theme data</div>
        // }
        return (
            <>
                <button onClick={this.changethemedark}>click Dark</button>
                <button onClick={this.changethemelight}>click Light</button>
                <button onClick={this.toggleTheme}>Toggle Theme</button>
                {/* <div className="conditional">
                    <h2>inside html render return </h2>
                    <p>if we want to perform some data according condition that time we need to adopt trnary operator ? :</p>
                    {(this.state.theme == "dark") ? "data" : "else"}
                </div> */}

                {/* <h2>Load data from render before retrun</h2>
                {ThemeDarkData} */}

                <div className='dark' style={(this.state.theme == "dark") ? { backgroundColor: "gray", color: "white" } : { backgroundColor: "white", color: "gray" }}>this will change</div>
            </>
        );
    }
}

export default ClassCompoConditionalRendering;
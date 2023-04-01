import React, { Component } from 'react';
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        // Declare State with default value for loader enable disable functionalities START
        this.state = { name: "My name is kauhsik" };
        // Declare State with default value for loader enable disable functionalities END
    }

    // componentWillReceiveProps has been renamed React

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        // Declare State with default value for loader enable disable functionalities START
        setTimeout(() => {
            this.setState({ name: "My  surname is valiya" })
        }, 2000)
        // Declare State with default value for loader enable disable functionalities END
    }

    // componentWillReceiveProps has been renamed React

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps");
    // }

    // componentWillReceiveProps has been renamed React
    // componentWillUpdate(nextProps, nextState) {
    // }

    // mponentDidUpdate(prevProps, prevState) {
    //     console.log("mponentDidUpdate");
    // }

    render() {

        return (
            <div>

                {<p>{this.state.name}</p>}
            </div>
        );
    }
}

export default Lifecycle;








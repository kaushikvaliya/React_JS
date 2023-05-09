import React, { Component } from 'react';

class FetchAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            newdata: null
        }
        fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json()).then((result) => {
            console.log(result);

            this.setState({
                data: result
            })

        })
    }

    render() {

        let fechdata = Object.entries(this.state.data).map(([key, val], index) => {
            // console.log(key, val);
            // console.log(val.id);
            // this.setState({ newdata: <li key={index}>{val.title}</li> })
            return <tr style={{ border: '1px solid black' }} key={index}>

                <td style={{ border: '1px solid black', padding: "10px" }} >{val.id}</td>
                <td style={{ border: '1px solid black', textAlign: "center", padding: "10px" }}>{val.userId}</td>
                <td style={{ border: '1px solid black', padding: " 0 10px" }}>{val.title}</td>
                <td style={{ border: '1px solid black', textAlign: "center" }}>{JSON.stringify(val.completed)}</td>
            </tr>

        })
        return (
            <div>
                {/* {JSON.stringify(this.state.data)} */}
                {/* <ul> </ul> */}
                {/* <ul >{fechdata}</ul> */}
                <table style={{ border: '1px solid black', width: "100%" }}>
                    {fechdata}
                </table>
            </div>
        );
    }
}

export default FetchAPI;
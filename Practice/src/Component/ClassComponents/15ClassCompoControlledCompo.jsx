import React, { Component } from 'react';

class ClassCompoControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state = { inputUname: "update  ", username: null, formdata: {} }
    }

    SetInputData = (event) => {
        // console.log("event", event);
        // console.log("event.target", event.target);
        console.log("event.target.value", event.target.value);
        this.setState({ inputUname: (event.target.value) })
    }

    submitdata = (event) => {
        event.preventDefault()
        // console.log("called");
        console.log(this.state);
    }
    render() {
        return (
            <>
                <h2 >set Data to State with function </h2>
                <input type="text" onChange={this.SetInputData} name='username' id='username' value={this.state.inputUname} />
                {this.state.inputUname}



                <h2 className='mt-5'>set Data to State inside input arrow </h2>
                <form action="">
                    {JSON.stringify(this.state)}
                    <input type="text" name='uname' id='uname' onChange={(event) => { this.setState({ username: event.target.value }) }} />
                    <input type="submit" value="submit" onClick={this.submitdata} />
                    {this.state.username}
                    {/* {JSON.stringify(this.state)}
                    <input type="text" onChange={
                        (event) => {
                            this.setState({ username: event.target.value })
                        }} />
                    {this.state.username}
                    <input type="submit" value="sumbit" onClick={this.submitdata} /> */}
                </form>

                <h2 className='mt-5'>set multiple Data to single State object inside input arrow</h2>
                <form action="">
                    <input type="email" name='email' id='email' onChange={(event) => {
                        this.setState((data) =>
                        ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />


                    <input type="password" name="password" id="password" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />

                    <input type="submit" value="sumbit" onClick={this.submitdata} />

                </form>


                {/* <form action="">
                    {JSON.stringify(this.state.formdata)}
                    <input type="email" name="email" id="email" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="password" name="password" id="password" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="submit" value="sumbit" onClick={this.submitdata} />
                </form> */}
            </>
        );
    }
}

export default ClassCompoControlledCompo;
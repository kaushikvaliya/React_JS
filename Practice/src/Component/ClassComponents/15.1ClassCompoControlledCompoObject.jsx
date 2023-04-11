import { MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';

class ClassCompoControlledCompoObject extends Component {
    constructor() {
        super();
        this.state = { formdata: { firstname: '', lastname: "", email: "", password: "", birthdate: "" }, new: {} }
    }
    inputData = (event) => {
        this.setState((data) => ({
            // console.log(data);
            formdata: { ...data.formdata, [event.target.name]: event.target.value }
        }))
    }
    sumbit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.setState(this.state.new = this.state.formdata)
        this.setState(this.state.formdata = {})
        // this.setState(this.state.formdata.firstname = "")
    }


    render() {
        return (
            <div>
                {JSON.stringify(this.state.formdata)}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <form action="">
                                <MDBInput type='text' size='lg' label='Firstname'
                                    value={(this.state.formdata.firstname) ? this.state.formdata.firstname : ""}
                                    name="firstname" id="firstname" onChange={this.inputData} className='d-block' />

                                <MDBInput type="text" size='lg' label='Lastname' name="lastname"
                                    value={(this.state.formdata.lastname) ? this.state.formdata.lastname : ""}
                                    id="lastname" placeholder='lname' onChange={this.inputData} className='d-block mt-4' />

                                <MDBInput type="email" size='lg' label='Email' name="email"
                                    value={(this.state.formdata.email) ? this.state.formdata.email : ""}
                                    id="email" placeholder='email' onChange={this.inputData} className='d-block mt-4' />

                                <MDBInput type="password" size='lg' label='Password'
                                    value={(this.state.formdata.password) ? this.state.formdata.password : ""}
                                    name="password" id="password" placeholder='password' onChange={this.inputData} className='d-block mt-4' />

                                <MDBInput type="date" size='lg' label='Birthdate'
                                    value={(this.state.formdata.birthdate) ? this.state.formdata.birthdate : ""}
                                    name="birthdate" id="bdata" className='d-block mt-4' onChange={(event) => {
                                        this.setState((data) => ({
                                            formdata: {
                                                ...data.formdata,
                                                [event.target.name]: event.target.value
                                            }
                                        }))
                                    }} />

                                <MDBBtn type="submit" value="submit" onClick={this.sumbit} className='d-block mt-4'>Submit</MDBBtn>
                                {/* <input type="submit" value="submit" onClick={this.sumbit} /><br /> */}
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <MDBTable >
                                    <MDBTableHead>
                                        <tr className='table-dark text-capitalize' >
                                            <th scope='col'>key</th>
                                            <th scope='col'>value</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {Object.entries(this.state.new).map(([key, value], index) => {
                                            return (
                                                <tr className='table-secondary' key={index}>
                                                    <td className=' text-capitalize'>{key}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            );
                                        })}
                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCompoControlledCompoObject;
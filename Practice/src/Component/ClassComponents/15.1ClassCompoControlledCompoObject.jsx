import { MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';


class ClassCompoControlledCompoObject extends Component {
    constructor() {
        super();
        this.state = { formdata: {} }
    }

    inputData = (event) => {
        this.setState((data) => ({
            // console.log(data);
            formdata: { ...data.formdata, [event.target.name]: event.target.value }
        }))
    }

    sumbit = (event) => {



        event.preventDefault()
        console.log(this.state.formdata);
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <form action="">
                                <MDBInput type='text' size='lg' label='Firstname' name="firstname" id="firstname" onChange={this.inputData} className='d-block'
                                />
                                <MDBInput type="text" size='lg' label='Lastname' name="lastname" id="lastname" placeholder='lname' onChange={this.inputData} className='d-block mt-4' />
                                <MDBInput type="email" size='lg' label='Email' name="email" id="email" placeholder='email' onChange={this.inputData} className='d-block mt-4' />
                                <MDBInput type="password" size='lg' label='Password' name="password" id="password" placeholder='password' onChange={this.inputData} className='d-block mt-4' />
                                <MDBInput type="date" size='lg' label='Birthdate' name="birthdate" id="bdata" className='d-block mt-4' onChange={(event) => {
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
                                        {Object.entries(this.state.formdata).map(([key, value], index) => {
                                            return (
                                                <tr className='table-info' key={index}>
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
import react from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardHeader,
    MDBCol,
    MDBCardBody,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent,
    MDBIcon,
    MDBCheckbox,
    MDBInput,
    MDBBtn,
    MDBTextArea,
    MDBNavbarLink,
} from 'mdb-react-ui-kit';
// import RegistetComponent from "./RegistetComponent.jsx"

const LoginCompoent = () => {
    return (
        <>
            <MDBContainer fluid className='mt-5'>
                <section>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6'>
                            <form>
                                <MDBInput className='mb-4' type='email' id='loginName' label='Email or username' />

                                <MDBInput className='mb-4' type='password' id='loginPassword' label='Password' />

                                <MDBRow className='mb-4'>
                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Remember me' />
                                    </MDBCol>

                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <a href='#!'>Forgot password?</a>
                                    </MDBCol>
                                </MDBRow>

                                <MDBBtn type='submit' block className='mb-4'>
                                    Sign in
                                </MDBBtn>

                                <div className='text-center'>
                                    <p>
                                        Not a member? <a href="#">Register</a>
                                    </p>
                                    <p>or sign up with:</p>
                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='github' />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        </>
    );
};

export default LoginCompoent;
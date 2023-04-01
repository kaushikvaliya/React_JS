import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

class CustomCardStrcutre extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={this.props.img} style={{ height: '150px', objectFit: 'cover' }} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText >
                            {this.props.text}
                        </MDBCardText>

                        <MDBBtn href='#'>{this.props.btntext}</MDBBtn>

                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default CustomCardStrcutre;
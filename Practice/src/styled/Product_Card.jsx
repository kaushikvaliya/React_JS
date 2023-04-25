import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";

const card = ({ prise, ProductName, ProductTypes, AvailableStock, realprice, productimg }) => {
    return (
        <>
            <MDBCard>
                <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style={{ width: "35px", height: "35px" }}
                    >
                        <p className="text-white mb-0 small">x4</p>
                    </div>
                </div>
                <MDBCardImage
                    src={productimg}
                    position="top"
                    alt="Laptop"
                />
                <MDBCardBody>
                    <div className="d-flex justify-content-between">
                        <p className="small">
                            <a href="#!" className="text-muted">
                                {ProductTypes}
                            </a>
                        </p>
                        <p className="small text-danger">
                            <s>₹{realprice}</s>
                        </p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{ProductName}</h5>
                        <h5 className="text-dark mb-0">₹ {prise}</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                        <p class="text-muted mb-0">
                            Available: <span class="fw-bold">{AvailableStock}</span>
                        </p>
                        <div class="ms-auto text-warning">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

        </>
    );
};

export default card;
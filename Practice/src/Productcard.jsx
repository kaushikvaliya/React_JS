import React, { Component } from 'react';
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
import { Link } from 'react-router-dom';


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { proudtdata: { productname: undefined, productprice: undefined }, count: 0, productamount: 0, buttonvalue: "Add to cart", }

        this.productname = React.createRef();
        this.productprice = React.createRef();
        // this.productimage = React.createRef();
    }


    cardvalue = (event) => {
        console.log("called");
        console.log(this.state.buttonvalue);
        this.setState({ buttonvalue: "go to card" })
        // event.currentTarget.disabled = true;
        console.log(this.productname.current.text);
        this.setState({ proudtdata: { productname: this.productname.current.text, productprice: parseFloat(this.productprice.current.text) } })

        this.setState({ productamount: parseFloat(this.productprice.current.text) })

        this.setState({ count: this.state.count + 1 })
    }
    increaseprice = () => {
        console.log("called increaseprice");
        this.setState({ count: this.state.count + 1 })
        this.setState({ productamount: this.state.proudtdata.productprice + this.state.productamount })
        console.log(this.state.productamount);
    }
    decreaseprice = () => {
        console.log("called decreaseprice");
        this.setState({ count: this.state.count -= 1 })
        if (this.state.count == 0) {
            this.setState({ count: 1 })
        }
        this.setState({ productamount: this.state.productamount - this.state.proudtdata.productprice })
        if (this.state.productamount == this.state.proudtdata.productprice) {
            this.setState({ productamount: this.state.proudtdata.productprice })
        }
        console.log(this.state.productamount);
    }


    render() {

        return (
            <>
                <MDBContainer fluid className="my-5">
                    <MDBRow className="justify-content-center">
                        <MDBCol >
                            <MDBCard style={{ borderRadius: "15px" }}>
                                <MDBRipple
                                    rippleColor="light"
                                    rippleTag="div"
                                    className="bg-image rounded hover-overlay"
                                >
                                    <MDBCardImage
                                        // ref={this.productimage}
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                                        fluid
                                        className="w-100"
                                        style={{
                                            borderTopLeftRadius: "15px",
                                            borderTopRightRadius: "15px",
                                        }}
                                    />
                                    <a href="#!">
                                        <div className="mask"></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p >
                                                <a href="#!" className="text-dark" ref={this.productname} >
                                                    Dell Xtreme 270
                                                </a>
                                            </p>
                                            <p className="small text-muted">Laptops</p>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>
                                            <p className="small text-muted">Rated 4.0/5</p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            ₹
                                            <a href="#!" className="text-dark" ref={this.productprice} >
                                                39999
                                            </a>
                                        </p>
                                        <p className="text-dark">#### 8787</p>
                                    </div>
                                    <p className="small text-muted">VISA Platinum</p>
                                </MDBCardBody>
                                <hr class="my-0" />
                                <MDBCardBody className="pb-0">
                                    <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                                        <Link>
                                            <MDBBtn color="primary" onClick={this.cardvalue}>{this.state.buttonvalue} </MDBBtn>
                                        </Link>
                                        <MDBBtn color="primary">Buy now</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer >


                <div className="container">

                    <div className="row my-5">
                        <div className="col-lg-12 ">
                            <div className="row">
                                <div className="col-lg-6">
                                    {JSON.stringify(this.state.proudtdata.productname)}
                                </div>
                                <div className="col-lg-6">
                                    {JSON.stringify(this.state.productamount)}
                                    {/* {JSON.stringify(this.state.proudtdata.productprice)} */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" d-flex justify-content-between align-items-xxl-center">
                        <MDBBtn onClick={this.increaseprice} className='d-block'>  + </MDBBtn>
                        <MDBBtn> {JSON.stringify(this.state.count)}   </MDBBtn>
                        <MDBBtn onClick={this.decreaseprice} className='d-block '>  -  </MDBBtn>
                    </div >
                </div >

            </>
        );
    }
}

export default ProductCard;
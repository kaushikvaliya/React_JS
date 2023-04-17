import React, { Component } from 'react';
import Productcard from './Productcard.jsx';

class Product extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row  my-5">
                        <div className="col-lg-4">
                            <Productcard price="10000" ></Productcard>
                        </div>
                        <div className="col-lg-4">
                            <Productcard price="20000"></Productcard>
                        </div>
                        <div className="col-lg-4">
                            <Productcard price="30000"></Productcard>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;

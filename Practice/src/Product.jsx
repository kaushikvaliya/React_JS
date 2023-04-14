import React, { Component } from 'react';
import Productcard from './Productcard.jsx';

class Product extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row  my-5">
                        <div className="col-lg-4">
                            <Productcard></Productcard>
                        </div>
                        <div className="col-lg-4">
                            {/* Tops**@43210 */}
                            <Productcard></Productcard>
                        </div>
                        <div className="col-lg-4">
                            <Productcard></Productcard>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;
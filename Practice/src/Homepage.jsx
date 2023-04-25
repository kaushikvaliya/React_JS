import React from 'react';
import Card from './styled/Product_Card.jsx'

const Homepage = () => {
    return (
        <>
            <section className='se_1_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home_text">
                                <h1>samsung</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-4">
                            <Card prise="9999" ProductName='HP Notebook' ProductTypes='Laptops' AvailableStock='6' realprice='10000' productimg='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'></Card>
                        </div>
                        <div className="col-lg-4">
                            <Card prise="9999" ProductName='HP Notebook' ProductTypes='Laptops' AvailableStock='6' realprice='10000' productimg='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'></Card>
                        </div>
                        <div className="col-lg-4">
                            <Card prise="9999" ProductName='HP Notebook' ProductTypes='Laptops' AvailableStock='6' realprice='10000' productimg='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'></Card>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Homepage;








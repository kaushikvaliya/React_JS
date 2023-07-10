import React from 'react';
import CustomHook from './Hook/customHook.jsx';
const ResCompo = () => {
    const { handleChange, inp, errors } = CustomHook({ role: '2' }, {})
    const savedata = (event) => {
        event.preventDefault()
    }
    return (
        <section className='bg-secondary py-5'>

            <div className="container">
                <div className="row ">
                    <div className="col-lg-9">
                        <h6 >Registration here</h6>
                        <h1 className='text-light'> Users Registration</h1>
                        <h4>field marked <span className='text-danger'>*</span> are required</h4>

                        <form action="" onSubmit={savedata}>
                            <div className="row justify-content-end">
                                <div className="col-lg-8">

                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="email" className='fs-5'> email <span className='text-danger '>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="email" placeholder="Email" onBlur={handleChange} className='thisrequired form-control' id='email' name='email' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="password" className='fs-5'> password <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="password" placeholder="Password" onBlur={handleChange} className='thisrequired form-control' id='password' name='password' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="repassword" className='fs-5'>Re-type password <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="password" placeholder="Retype password" onBlur={handleChange} className='thisrequired form-control' id='repassword' name='repassword' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="fname" className='fs-5'>First name <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="First name" onBlur={handleChange} className='thisrequired form-control' id='fname' name='fname' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="lname" className='fs-5'>Last name <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="Last name" onBlur={handleChange} className='thisrequired form-control' id='lname' name='lname' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="number" className='fs-5'>Phone number <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="tel" placeholder="Phone number" onBlur={handleChange} className='thisrequired form-control' id='number' name='number' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="Address" className='fs-5'>Address <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="Address" onBlur={handleChange} className='thisrequired form-control' id='Address' name='Address' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="Town" className='fs-5'>Town</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="Town" onBlur={handleChange} className='thisrequired form-control' id='Town' name='Town' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="Region" className='fs-5'>Region <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="Region" onBlur={handleChange} className='thisrequired form-control' id='Region' name='Region' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="zip" className='fs-5'>Postcode / Zip <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="zip" onBlur={handleChange} className='thisrequired form-control' id='zip' name='zip' />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-4">
                                            <label htmlFor="country" className='fs-5'>country / Zip <span className='text-danger'>*</span></label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" placeholder="country" onBlur={handleChange} className='thisrequired form-control' id='country' name='country' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-center my-4">
                                            <button type='submit' className='btn btn-success '>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResCompo;
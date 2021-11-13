import React from 'react';
import './Professional.css'
import images from '../../../images/ge2.jpg'
const Professional = () => {
    return (
        <section className='Professional-section my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>Life is like riding a bicycle.</h3>
                                <p className='text-dark'>We all know life is not always an easy ride along a beautiful cycling path. Sometimes it is just like a bicycle wheel spinning around on the ups and downs of a muddy trail (wait a moment. Actually, this is my idea of fun). </p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>10000</h1>
                                    <p>Happy Customer</p>
                                </div>

                                <div className="customer">
                                    <h1>100</h1>
                                    <p>Total Responce</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;
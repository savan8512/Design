import React from 'react';

function Pricing() {
    return (
        <div>
            <section className="pricing" id="pricing">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Our Package</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="row wow animate__animated animate__fadeInUp animate__slow">
                        <div className="pricing-item">
                            <h2>Business Version</h2>
                            <div className="price">
                                <span>$ 120</span>
                                <span className="text">Monthly</span>
                            </div>
                            <ul>
                                <li>24 Accounts</li>
                                <li>10 GB Storage</li>
                                <li>Lifetime Support</li>
                                <li>Reliable Service</li>
                            </ul>
                        </div>
                        <div className="pricing-item">
                            <h2>Professional Version</h2>
                            <div className="price">
                                <span>$ 120</span>
                                <span className="text">Monthly</span>
                            </div>
                            <ul>
                                <li>24 Accounts</li>
                                <li>10 GB Storage</li>
                                <li>Lifetime Support</li>
                                <li>Reliable Service</li>
                            </ul>
                        </div>
                        <div className="pricing-item">
                            <h2>Standard Version</h2>
                            <div className="price">
                                <span>$ 120</span>
                                <span className="text">Monthly</span>
                            </div>
                            <ul>
                                <li>24 Accounts</li>
                                <li>10 GB Storage</li>
                                <li>Lifetime Support</li>
                                <li>Reliable Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Pricing;
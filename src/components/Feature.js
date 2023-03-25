import React from 'react';

function Feature() {
    return (
        <div>
            <section className="feature" id="feature">
                <div className="container">
                    <div className="row">
                        <div className="feature-left wow animate__animated animate__fadeInUp animate__slow">
                            <img src="assets/features-mockup.png" alt />
                        </div>
                        <div className="feature-right wow animate__animated animate__fadeInUp animate__slow">
                            <div className="title">
                                <h2>Explore the Features</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum fugiat culpa laborum porro modi?</p>
                            </div>
                            <div className="feature-item">
                                <span><i className="fas fa-tablet-alt" /></span>
                                <div>
                                    <h3>Responsive Design</h3>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est minima voluptas cupiditate molestias! Vel.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span><i className="fas fa-clone" /></span>
                                <div>
                                    <h3>Retina Ready</h3>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est minima voluptas cupiditate molestias! Vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Feature;
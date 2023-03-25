
import React from 'react';

function Testimonial() {
    return (
        <div>
            <section className="testimonial" id="testimonial">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Testimonials Words</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__slow">
                        <div className="testimonial-item">
                            <div className="testimonial-img">
                                <img src="assets/test-1.jpg" alt />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus necessitatibus totam alias unde sint veritatis placeat beatae maiores odio?</p>
                            <span>Someone's Name</span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-img">
                                <img src="assets/test-2.jpg" alt />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus necessitatibus totam alias unde sint veritatis placeat beatae maiores odio?</p>
                            <span>Someone's Name</span>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-img">
                                <img src="assets/test-3.jpg" alt />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus necessitatibus totam alias unde sint veritatis placeat beatae maiores odio?</p>
                            <span>Someone's Name</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Testimonial;
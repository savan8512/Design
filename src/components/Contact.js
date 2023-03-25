
import React from 'react';

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Contact Us</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="row wow animate__animated animate__fadeInUp animate__slow">
                        <div className="contact-left">
                            <h2>Send Message Here</h2>
                            <form>
                                <input type="text" className="form-control" placeholder="Name" />
                                <input type="email" className="form-control" placeholder="Email" />
                                <textarea placeholder="Message" rows={6} defaultValue={""} />
                                <button type="submit" className="submit-btn">Send Now</button>
                            </form>
                        </div>
                        <div className="contact-right">
                            <div>
                                <h2>Visit Office</h2>
                                <p className="text">1001 wenish Street, numquam - Orlando, 85120, Uk</p>
                            </div>
                            <div>
                                <h2>Call Us</h2>
                                <p className="text">0033-2332485=8448 / 8320-2838585-0000</p>
                            </div>
                            <div>
                                <h2>Send Email</h2>
                                <p className="text">design.@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
import React from 'react';

function Details() {
    return (
        <>
            <section className="detail">
                <div className="container">
                    <div className="row">
                        <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                            <span><i className="fas fa-tablet-alt" /></span>
                            <h2>Responsive Design</h2>
                            <div className="line" />
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident suscipit culpa minus aliquid possimus, nemo ducimus amet itaque nam quis quaerat debitis. Quis, quidem.</p>
                        </div>
                        <div className="detail-item wow animate__animated animate__fadeInUp animate__s">
                            <span><i className="fab fa-html5" /></span>
                            <h2>HTML5</h2>
                            <div className="line" />
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident suscipit culpa minus aliquid possimus, nemo ducimus amet itaque nam quis quaerat debitis. Quis, quidem.</p>
                        </div>
                        <div className="detail-item wow animate__animated animate__fadeInRight animate__slow">
                            <span><i className="far fa-bell" /></span>
                            <h2>24 Hour Support</h2>
                            <div className="line" />
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident suscipit culpa minus aliquid possimus, nemo ducimus amet itaque nam quis quaerat debitis. Quis, quidem.</p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Details;
import React from 'react';

function Header() {
    return (
        <div>
            <header className="header" id="intro">
                <nav className="navbar">
                    <div className="container">
                        <div className="brand-and-toggler">
                            <a href="index.html" className="navbar-brand">
                                Design<span>.</span>
                            </a>
                            <button type="button" className="navbar-toggler" id="navbar-toggler">
                                <i className="fas fa-bars" />
                            </button>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#intro" className="nav-link">intro</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#feature" className="nav-link">feature</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#team" className="nav-link">team</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#pricing" className="nav-link">pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#testimonial" className="nav-link">testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="hero-div center container">
                    <h1>we make your website stand out</h1>
                    <p className="animate__animated animate__fadeInUp animate__slow">The best way to connect people with your brand.</p>
                    <div className="hero-btns animate__animated animate__fadeInUp animate__slow">
                        <button type="button" className="btn-trans">learn more</button>
                        <button type="button" className="btn-white">meet our people</button>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;
import React from 'react';
import resource from '../utils/resource';

function AboutUs() {
    return (
        <div className='about-us'>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className='shadow'></div>
                        <img
                            src={resource.aboutUs.image}
                            alt="Hakkımızda"
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="mb-4"> {resource.aboutUs.title} </h1>
                            <p> {resource.aboutUs.contentOne} </p>
                            <p> {resource.aboutUs.contentTwo} </p>
                            <a href="/Contact" className="about-us-button btn btn-warning mt-3"> {resource.aboutUs.buttonText} </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

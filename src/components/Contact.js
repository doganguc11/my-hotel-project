import React, { useState } from 'react';
import resource from '../utils/resource';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="container my-4">
            <div className='row'>
                <h2 className="mb-4"> {resource.contact.title} </h2>

                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"> {resource.contact.name} </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{resource.contact.email}</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">{resource.contact.message}</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-warning"> {resource.contact.buttonText} </button>
                    </form>
                </div>

                <div className='col-md-6'>
                    <p>{resource.footer[0].contentOne}</p>
                    <p>{resource.footer[0].contentTwo}</p>
                    <p>{resource.footer[0].contentThree}</p>
                </div>

                <div className='col-md-12 mt-4'>
                    <img src={`${process.env.PUBLIC_URL} ${resource.contact.googleMaps}`} alt="Logo" className='w-100' />
                </div>
            </div>


        </div>
    );
};

export default Contact;

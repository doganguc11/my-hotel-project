import React from 'react';
import resource from '../utils/resource';

function Footer() {
    return (
        <footer className="footer text-secondary pt-4">
            <div className="container">
                <div className="row">
                    {resource.footer.map((footerContent) => (
                        <div className="col-md-4">
                            <h5>{footerContent.title}</h5>
                            <ul className="list-unstyled">
                                <li>{footerContent.contentOne ? footerContent.contentOne : ''}</li>
                                <li>{footerContent.contentTwo ? footerContent.contentTwo : ''}</li>
                                <li>{footerContent.contentThree ? footerContent.contentThree : ''}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center py-3">
                    <p>&copy; 2024 Otel Fiyat mülakat projesidir.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

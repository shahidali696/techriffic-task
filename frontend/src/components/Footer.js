import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-3">
            <div className="container">
                <div className="row">
                    {/* Section 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h6>Section 1</h6>
                        <ul className="list-unstyled">
                            {[...Array(5)].map((_, index) => (
                                <li key={index}><a href="#" className="text-white">Link Will be here {index + 1}</a></li>

                            ))}
                        </ul>
                    </div>
                    {/* Section 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h6>Section 2</h6>
                        <ul className="list-unstyled">
                            {[...Array(5)].map((_, index) => (
                                <li key={index}><a href="#" className="text-white">Link Will be here {index + 1}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Section 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h6>Section 3</h6>
                        <ul className="list-unstyled">
                            {[...Array(5)].map((_, index) => (
                                <li key={index}><a href="#" className="text-white">Link Will be here {index + 1}</a></li>

                            ))}
                        </ul>
                    </div>
                    {/* Section 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h6>Section 4</h6>
                        <ul className="list-unstyled">
                            {[...Array(5)].map((_, index) => (
                                <li key={index}><a href="#" className="text-white">Link Will be here {index + 1}</a></li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

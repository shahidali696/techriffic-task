import React from 'react';

function Banner() {
    return (
        <div className="container-fluid m-0 p-2 px-4 bg-dark">
            <div className="d-md- justify-content-md-center">
                <div className="">
                    <div className="row">
                        {[...Array(12)].map((_, index) => (
                            <div key={index} className="col-sm-3 col-md-2 col-lg-1 text-white border-right border-white">
                                <a href="#" className="nav-link text-white my-text ">Menu {index + 1}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Banner;

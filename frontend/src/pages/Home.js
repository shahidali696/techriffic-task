import React from 'react';
import Slider from '../components/Slider';
import Offer from '../resource/offer.png'
import CategoriesSection from '../components/Categories';
import ProductList from './ProductList';
import Header from '../resource/banner.png'


function Home() {
    return (
        <div>
            {/* Slider Section */}
            <section className="slider-section px-4">
                <img src={Header} alt="" width="100%" />
                <div className="container-fluid px-2">
                    <div className="row">
                        {/* Slider */}
                        <div className="col-lg-9 px-1">
                            <div className="slider">
                                <Slider />
                            </div>
                        </div>
                        {/* Offer Images */}
                        <div className="col-lg-3 px-0">
                            <img src={Offer} alt="" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </section>

            <CategoriesSection />
            <ProductList />

        </div>
    );
}

export default Home;

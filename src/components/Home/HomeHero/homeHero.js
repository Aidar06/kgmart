import React from 'react';
import img from '../../../assets/bgs/unsplash_yDCr9gv3QH4.jpg'
import img1 from '../../../assets/bgs/unsplash_eyFcZLLYvfA.png'
import img2 from '../../../assets/bgs/unsplash_qW_k6x5OfRc.png'

const HomeHero = () => {
    return (
        <section id='homeHero'>
            <div className="container">
                <div className="homeHero">
                    <img className='homeHero--img' src={img1} alt=""/>
                    <div className="homeHero--pay">
                        <div className="homeHero--pay__block">
                            <h2>Безопасный <br/><span>платеж</span></h2>
                        </div>
                    </div>
                    <img className='homeHero--img' src={img} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
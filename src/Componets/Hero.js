import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <>
            <div className="container-fluid main-img">
                <div className="container main-part">
                    <p>FRESH & ORGANIC</p>
                    <h2>Delicious Seasonal Fruits</h2>
                    <Link to="/shop">
                        <button className="btn1-part1 mt-3 mr-2">Fruit Collection</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn2-part1 mt-3">Contact Us</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Hero;
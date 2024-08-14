import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                {/* <Link className="navbar-brand mr-0 " to="/">
                    <img src="IMG/Fruit-Logo.png" className='nav-logo' alt="Fresh Fruit hub " />
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-lg-3 ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/News">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fa fa-shopping-cart"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fa-solid fa-magnifying-glass"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar
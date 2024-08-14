import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer
        className="footer bg-dark text-light py-4"

      >
        <div className="container p-5">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6 col-sm-12 col-xl-2 pb-0 mb-0 mt-2 footer_logo" style={{ height: "20px" }}>
              <Link to="/"><img src="IMG/Fruit-logo.png" alt="Logo" width="100%" height="20" /></Link>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12 col-xl-4 mt-2 text-center">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt pt-3"></i> 123 Main Street,
                  City, Country
                </li>
                <li><i className="fas fa-envelope pt-3"></i> info@example.com</li>
                <li><i className="fas fa-phone pt-3"></i> +1 234 567 890</li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 col-md-6 col-sm-12 col-xl-2 text-center text-light">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Shop</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">About</Link></li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 col-md-6 col-sm-12 col-xl-2 text-center">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li><Link to="#">Support</Link></li>
                <li><Link to="#">FAQs</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 col-md-6 col-sm-12 col-xl-2 text-center">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <Link to="#" className="mr-2"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" className="mr-2"><i className="fab fa-twitter"></i></Link>
                <Link to="#" className="mr-2"><i className="fab fa-instagram"></i></Link>
              </div>
            </div>
          </div>
          <p className="mb-0 text-center mt-4">
            © 2023 <Link to="#" className="text-light"> Fresh FruitHub.</Link> All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 w-100">
      <div className="container">
        <div className="row">

          {/* Categories */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase">Categories</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Graphics & Design</a></li>
              <li><a href="#" className="text-white text-decoration-none">Digital Marketing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Programming & Tech</a></li>
              <li><a href="#" className="text-white text-decoration-none">AI Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Service Catalog</a></li>
            </ul>
          </div>

          {/* For Clients */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase">For Clients</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">How FreelanceConnect Works</a></li>
              <li><a href="#" className="text-white text-decoration-none">Success Stories</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">Trust & Safety</a></li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase">For Freelancers</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Become a Freelancer</a></li>
              <li><a href="#" className="text-white text-decoration-none">Join an Agency</a></li>
              <li><a href="#" className="text-white text-decoration-none">Community Hub</a></li>
              <li><a href="#" className="text-white text-decoration-none">Events</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center py-2 mt-3 border-top border-secondary" style={{ fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} <a className="text-white text-decoration-none" href="#">FreelanceConnect</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ImageSlider from './PhotoSlider';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <h1 className="mb-3 display-5 fw-bold text-white">Welcome to FreelanceConnect</h1>
              <p className="lead mb-4 text-light">Start hiring top talent or earn money as a freelancer.</p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg text-primary fw-bold" onClick={handleNavigate}>
                  Hire Freelancer
                </button>
                <button className="btn btn-outline-light btn-lg fw-bold" onClick={() => navigate('/signup')}>
                  Earn Money Freelancing
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="section-dark section-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://cdn.pixabay.com/photo/2019/10/03/12/11/freelance-4523096_1280.jpg"
                alt="About us"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">About FreelanceConnect</h2>
              <p className="fs-5">
                FreelanceConnect is a modern freelancing platform designed especially for students and clients
                looking for affordable and skilled talent. Whether you're here to hire professionals or earn as
                a freelancer, join our growing community and experience seamless collaboration and secure payments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-dark section-spacing">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="glass-card">
                <i className="bi bi-lightning-charge display-4 text-info mb-3"></i>
                <h5>Fast Hiring</h5>
                <p>Connect with top freelancers instantly and get your project moving fast.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="glass-card">
                <i className="bi bi-wallet2 display-4 text-success mb-3"></i>
                <h5>Secure Payments</h5>
                <p>All transactions are secured, ensuring trust for both clients and freelancers.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="glass-card">
                <i className="bi bi-person-check display-4 text-warning mb-3"></i>
                <h5>Verified Talent</h5>
                <p>Work with skilled students and professionals who are passionate and experienced.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="section-dark section-spacing">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row g-4">
            {[
              { step: '1. Sign Up', desc: 'Create a free account as a client or freelancer.' },
              { step: '2. Post or Browse Projects', desc: 'Clients post jobs, freelancers browse matching gigs.' },
              { step: '3. Collaborate', desc: 'Chat, share files, and work together directly.' },
              { step: '4. Get Paid', desc: 'Payments are released after successful project completion.' },
            ].map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="glass-card">
                  <h5 className="fw-bold">{item.step}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section-dark section-spacing">
        <div className="container">
          <h2 className="text-center mb-5">What People Say</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>"This platform helped me find a logo designer in just 2 hours!"</p>
                <footer className="blockquote-footer mt-2 text-white-50">Ritika, Startup Founder</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>"I earned my first ₹10,000 as a student developer—amazing experience!"</p>
                <footer className="blockquote-footer mt-2 text-white-50">Akash, Freelance Student</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p>"FreelanceConnect is smooth, secure, and super easy to use."</p>
                <footer className="blockquote-footer mt-2 text-white-50">Rahul, Web Developer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="section-accent section-spacing">
        <div className="container">
          <h2 className="mb-3">Ready to Get Started?</h2>
          <p className="fs-5 mb-4">Sign up today and unlock opportunities for work and growth!</p>
          <button className="btn btn-primary btn-lg px-4" onClick={handleNavigate}>
            Join Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

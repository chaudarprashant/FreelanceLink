import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ImageSlider from './PhotoSlider';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  //top project display
  const [topProjects, setTopProjects] = useState([]);
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/projects/top`);
      setTopProjects(res.data);
    } catch (err) {
      console.error('Failed to fetch top projects:', err);
    }
  };
  fetchProjects();
}, []);


  const handleNavigate = () => {
     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    navigate('/home'); // or any protected route
  } else {
    navigate('/login');
  }
  };

  return (
    <Layout>
  {/* Hero Section */}
<div className="hero-section py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Text Column */}
      <div className="col-md-6 order-2 order-md-1 text-center text-md-start mt-4 mt-md-0">
        <h1 className="mb-3 display-5 fw-bold text-black">Welcome to FreelanceConnect</h1>
        <p className="lead mb-4 text">Start hiring top talent or earn money as a freelancer.</p>
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
          <button className="btn btn-light btn-lg text-primary fw-bold" onClick={handleNavigate}>
            Hire Freelancer
          </button>
          <button className="btn btn-outline-light btn-lg fw-bold text-black" onClick={() => navigate('/signup')}>
            Earn Money Freelancing
          </button>
        </div>
      </div>

      {/* Image Column */}
      <div className=" col-md-6 order-1 order-md-2 
      text-center">
        <ImageSlider />
      </div>

    </div>
  </div>
</div>


      {/* About Section */}
      <div className="section-dark section-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 my-4">
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

   {/* top project */}
   {/* <div className="section-dark section-spacing"> */}
   <div>
  <div className="container">
    <h2 className="text-center mb-5">Get inspired by work done on FreelanceConnect</h2>
    <div className="row">
      {topProjects.length > 0 ? (
        topProjects.map((project, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="glass-card text-start">
              <img
                src={project.image}
                alt={project.category}
                className="img-fluid rounded mb-3"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h5>{project.category}</h5>
              <p className="text-muted small">By: {project?.providerId?.name || 'Unknown'}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No top projects yet.</p>
      )}
    </div>
  </div>
</div>



      {/* How It Works Section */}
      <div >
        <div className="container my-4">
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
   <div >
  <div className="container my-5">
    <h2 className="text-center mb-5">What People Say 💬</h2>
    <div className="row justify-content-center">
      {[
        {
          message: "This platform helped me find a logo designer in just 2 hours!",
          author: "Ritika, Startup Founder",
        },
        {
          message: "I earned my first ₹10,000 as a student developer—amazing experience!",
          author: "Akash, Freelance Student",
        },
        {
          message: "FreelanceConnect is smooth, secure, and super easy to use.",
          author: "Rahul, Web Developer",
        },
      ].map((item, idx) => (
        <div className="col-md-4 mb-4" key={idx}>
          <div className="chat-bubble shadow-lg">
            <p className="mb-2">“{item.message}”</p>
            <footer className="blockquote-footer text-end text-white-50">{item.author}</footer>
          </div>
        </div>
      ))}
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

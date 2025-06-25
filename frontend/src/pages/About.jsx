import React from "react";
import Layout from "../components/Layout/Layout";
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="about-container">
          <h1>About FreelanceConnect</h1>
          <p>
            FreelanceConnect is a micro-freelancing marketplace designed specifically
            for students. Our platform bridges the gap between students looking for
            project assistance and skilled student freelancers who can help bring
            ideas to life.
          </p>
          <h2>Our Mission</h2>
          <p>
            We aim to empower students by providing a platform where they can
            showcase their skills, collaborate on projects, and gain real-world
            experience while earning money.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Connect with talented student freelancers.</li>
            <li>Build your portfolio with real-world projects.</li>
            <li>Earn while you learn and grow your skills.</li>
            <li>Secure payments and trusted collaboration.</li>
          </ul>
          <p>
            Join us today and become a part of a thriving student freelancing
            community!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

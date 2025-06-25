import React from "react";
import Layout from "../components/Layout/Layout";
import './Contact.css';


const Contact = () => {
  return (
   <Layout>
  <div className="contact-page">
    <div className="contact-card">
      <h1 className="text-center mb-3">Contact Us</h1>
      <p className="text-center text-muted mb-4">
        Have questions or need support? Reach out to us, and we’ll be happy to help!
      </p>
      <form>
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Message</label>
          <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  </div>
</Layout>

  );
};

export default Contact;

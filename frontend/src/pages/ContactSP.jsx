import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FloatingContactPanel from "./FloatingContactPanel"; 
import FloatingPaymentPanel from "./FloatingPaymentPanel";

const ContactSP = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showPanel, setShowPanel] = useState(false);
const [showPaymentPanel, setShowPaymentPanel] = useState(false);

  const storedUser = localStorage.getItem("user");
  let user = null;

  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (e) {
      console.error("Invalid JSON in localStorage for 'user'");
    }
  }

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`/api/service-provider/service-provider/${id}`);
        console.log("Fetched provider data:", res.data); 
        setProvider(res.data);
         console.log("Fetched provider ID:", res.data._id);
      } catch (err) {
        console.error("Failed to load provider", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProvider();
  }, [id]);

  if (!user) return <p>Please login to access chat.</p>;
  if (loading) return <p>Loading service provider...</p>;
  if (!provider) return <p>Service provider not found.</p>;

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="container mt-5 px-3">
      <div className="card mx-auto shadow-lg p-4" style={{ maxWidth: "100%" }}>
        <div className="w-100" style={{ margin: 0, padding: 0 }}>
          {/* --- Service Provider Card --- */}
          <div className="card border-0 rounded-0 w-100">
            <div className="card-body px-4">
              <h2 className="card-title text-center mb-4">Service Provider Details</h2>
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-3 mb-md-0">
                  <img
                    src="https://i.pinimg.com/736x/b1/88/c6/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg"
                    alt="Profile"
                    className="img-fluid rounded-circle border border-secondary"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-9">
                  <p className="card-text mb-2"><strong>Name:</strong> {provider?.userId?.name || "Not Available"}</p>
                  <p className="card-text mb-2"><strong>Bio:</strong> {provider.bio || "No bio provided"}</p>
                  <p className="card-text mb-2">
                    <strong>Experience:</strong>{" "}
                    <span className="badge bg-success fs-6">{provider.experience} years</span>
                  </p>
                  <p className="card-text mb-2">
                    <strong>Skills:</strong>{" "}
                    {(typeof provider.skills === "string" ? provider.skills.split(",") : provider.skills || []).map(
                      (skill, index) => (
                        <span key={index} className="badge bg-primary me-2 mb-1">{skill.trim()}</span>
                      )
                    )}
                  </p>
                  <p className="card-text mb-2"><strong>Phone:</strong> {provider.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Portfolio Section --- */}
          {provider.portfolio && (
            <div className="w-100 bg-light py-3 px-4 border-top">
              <h5 className="mb-2">🌐 Portfolio</h5>
              <a href={provider.portfolio} target="_blank" rel="noreferrer">{provider.portfolio}</a>
            </div>
          )}

          {/* --- Price Section --- */}
         {/* --- Price Section --- */}
{provider.pricing && (
  <div className="w-100 bg-white py-5 px-4 border-top rounded shadow-sm">
    <h4 className="mb-4 font-weight-bold">💰 Pricing Plans</h4>
    <ul className="list-unstyled">
      {/* Basic Plan */}
      {provider.pricing.basic && (
        <li className="mb-4 border p-3 rounded">
          <h5 className="mb-2 text-primary"><strong>Basic:</strong> ₹{provider.pricing.basic}</h5>
          <p className="text-muted mb-1">✔ Ideal for small tasks or idea validation.</p>
          <p className="text-muted mb-0">
            You share your idea, and I build a basic version based on it — no in-depth customization or iterations included.
          </p>
        </li>
      )}

      {/* Standard Plan */}
      {provider.pricing.standard && (
        <li className="mb-4 border p-3 rounded">
          <h5 className="mb-2 text-success"><strong>Standard:</strong> ₹{provider.pricing.standard}</h5>
          <p className="text-muted mb-1">✔ Best for complete mid-scale projects.</p>
          <p className="text-muted mb-0">
            Includes complete development based on your requirements, instructions, and feedback — full collaboration throughout the process.
          </p>
        </li>
      )}

      {/* Premium Plan */}
      {provider.pricing.premium && (
        <li className="mb-4 border p-3 rounded">
          <h5 className="mb-2 text-warning"><strong>Premium:</strong> ₹{provider.pricing.premium}</h5>
          <p className="text-muted mb-1">✔ For clients who want it all — stress-free & future-ready.</p>
          <p className="text-muted mb-0">
            Everything in Standard plus ongoing maintenance, performance optimization, and support after project delivery. Priority response & full-stack servicing included.
          </p>
        </li>
      )}
    </ul>

  </div>
)}

<div className="text-center mt-4 mb-3">
  <button className="btn btn-outline-primary" onClick={() => setShowPaymentPanel(true)}>
    💳 Make Payment
  </button>
</div>

          

          {/* --- Contact Section --- */}
        {/* --- Contact Section --- */}
<div className="w-100 bg-light py-4 px-4 border-top">
  <h4 className="mb-3">📞 Contact</h4>

  <div className="d-flex flex-wrap gap-4">
    {/* Left: Contact Info & Socials */}
    <div className="flex-grow-1" style={{ minWidth: "250px", maxWidth: "400px" }}>
      <p><strong>Email:</strong> {provider.userId?.email || "Not provided"}</p>
      <p><strong>Phone:</strong> {provider.phone}</p>

      {/* Social Media Icons */}
      <div className="mb-3">
        {provider.socialLinks?.linkedin && (
          <a href={provider.socialLinks.linkedin} target="_blank" rel="noreferrer" className="me-3">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
        )}
        {provider.socialLinks?.instagram && (
          <a href={provider.socialLinks.instagram} target="_blank" rel="noreferrer" className="me-3">
            <i className="bi bi-instagram fs-4"></i>
          </a>
        )}
        {provider.socialLinks?.twitter && (
          <a href={provider.socialLinks.twitter} target="_blank" rel="noreferrer" className="me-3">
            <i className="bi bi-twitter fs-4"></i>
          </a>
        )}
        {provider.socialLinks?.github && (
          <a href={provider.socialLinks.github} target="_blank" rel="noreferrer">
            <i className="bi bi-github fs-4"></i>
          </a>
        )}
      </div>
    </div>

{}
    {/* Right: Chat Box */}
    {/* Right: Contact Panel Trigger */}
<div className="flex-grow-1" style={{ minWidth: "300px" }}>
  <div className="border rounded p-3 bg-white shadow h-100 d-flex flex-column justify-content-between">
    <div>
      <h5 className="mb-3">👉Let's Proceed 🚀</h5>
      <p>Click below to get your Project Devlopment with {provider?.userId?.name} </p>
    </div>

    <button className="btn btn-primary mt-3" onClick={() => setShowPanel(true)}>
      Contact Us
    </button>
  </div>
</div>

{/* Floating Panel (conditionally rendered) */}
{showPanel && (
  <FloatingContactPanel
    onClose={() => setShowPanel(false)}
    userId={user?._id}
    // serviceProviderId={provider?._id}
     serviceProviderId={provider.userId?._id}
    phone={provider.phone} // ✅ pass phone number here
  />
)}

    {}

  </div>
</div>

        </div>
      </div>


      {showPaymentPanel && (
  <FloatingPaymentPanel
    onClose={() => setShowPaymentPanel(false)}
    pricing={provider.pricing}
    user={user}
    provider={provider}
  />
)}

    </div>
  );
};

export default ContactSP;

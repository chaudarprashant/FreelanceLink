import React, { useState } from "react";

const FloatingContactPanel = ({ onClose, phone }) => {
  const [showSteps, setShowSteps] = useState(false);

  const openWhatsApp = () => {
    if (!phone) {
      alert("Phone number not available.");
      return;
    }

    // ✅ Ensure number is clean
    const cleanedPhone = phone.replace(/\D/g, ""); // remove non-digit characters
    const fullPhone = cleanedPhone.startsWith("91") ? cleanedPhone : "91" + cleanedPhone;
    const message = "Hi, I have a question about your service.";
    const waUrl = `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, "_blank");
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "80px",
      right: "30px",
      width: "340px",
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      padding: "20px",
      zIndex: 999
    }}>
      <h5 className="mb-4">How can I help?</h5>

      {!showSteps ? (
        <>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div>
              <strong>How to Start your project development</strong>
              <p className="text-muted small mb-0">How we work</p>
            </div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => setShowSteps(true)}>→</button>
          </div>


          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div><strong>Chat with Service provider on WhatsApp</strong></div>
            <button className="btn btn-sm btn-outline-primary" onClick={openWhatsApp}>→</button>
          </div>

          

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div>
              <strong>Give The Project Overview</strong>
              <p className="text-muted small mb-0">Describe your project</p>
            </div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => alert("Open quote form")}>→</button>
          </div>
          

        </>
      ) : (
        <div>
          <h6 className="text-primary mb-3">📋 Project Process</h6>
          <ol className="small text-dark ps-3">
            <li>💳 Make Payment</li>
            <li>📝 Share Project Details & Prototype</li>
            <li>📸 Upload Payment Screenshot</li>
            <li>🚀 Service Provider Starts Work</li>
            <li>📦 Final Delivery with Support</li>
          </ol>
          <button className="btn btn-outline-secondary btn-sm w-100 mt-2" onClick={() => setShowSteps(false)}>
            ← Back
          </button>
        </div>
      )}

      <button className="btn btn-secondary mt-3 w-100" onClick={onClose}>Close</button>
    </div>
  );
};

export default FloatingContactPanel;

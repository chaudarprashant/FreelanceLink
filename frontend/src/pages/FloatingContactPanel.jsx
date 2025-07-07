import React, { useState } from "react";
import axios from "axios";

const FloatingContactPanel = ({ onClose, phone, serviceProviderId, userId }) => {

  console.log("Received serviceProviderId:", serviceProviderId); 

  const [view, setView] = useState("main");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [minDays, setMinDays] = useState("");
  const [files, setFiles] = useState([]);

  const openWhatsApp = () => {
    if (!phone) return alert("Phone number not available.");
    const cleanedPhone = phone.replace(/\D/g, "");
    const fullPhone = cleanedPhone.startsWith("91") ? cleanedPhone : "91" + cleanedPhone;
    const message = "Hi, I have a question about your service.";
    window.open(`https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleFileChange = (e) => setFiles([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Quote with serviceProviderId:", serviceProviderId); 
    
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("description", description);
    formData.append("minDays", minDays);
    formData.append("userId", userId); // ✅ already passed via props
   formData.append("serviceProviderId", serviceProviderId); // ✅ already passed via props

   // Append files
  for (const file of files) {
    formData.append("files", file);
  }

    try {
    
      // await axios.post("/api/quotes/create", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/quotes/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
       });
      alert("Quote submitted successfully!");
      setView("main");
      setProjectName("");
      setDescription("");
      setMinDays("");
      setFiles([]);
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <>
      {/* Fullscreen Quote Form */}
      {view === "quote" && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "#fff",
          zIndex: 1000,
          padding: "40px 20px",
          overflowY: "auto"
        }}>
          <h4 className="mb-4 text-center">📝 Get a Project Quote</h4>

          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
            <textarea
              className="form-control mb-3"
              placeholder="Project Description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Minimum Days to Complete"
              value={minDays}
              onChange={(e) => setMinDays(e.target.value)}
              required
            />
            <label className="form-label">Upload Payment ScreenShot,Project Prototype and files : </label>
            <input
              type="file"
              className="form-control mb-3"
              multiple
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
            />

            <button type="submit" className="btn btn-success w-100 mb-2">Submit Quote</button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100"
              onClick={() => setView("main")}
            >
              ← Cancel & Go Back
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Panel */}
      {view === "main" && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "30px",
          width: "360px",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          padding: "20px",
          zIndex: 999
        }}>
          <h5 className="mb-4">How can I help?</h5>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div>
              <strong>How to Start your project development</strong>
              <p className="text-muted small mb-0">How we work</p>
            </div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => setView("steps")}>→</button>
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
            <button className="btn btn-sm btn-outline-primary" onClick={() => setView("quote")}>→</button>
          </div>

          <button className="btn btn-secondary mt-3 w-100" onClick={onClose}>Close</button>
        </div>
      )}

      {/* Project Steps View */}
      {view === "steps" && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "30px",
          width: "360px",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          padding: "20px",
          zIndex: 999
        }}>
          <h6 className="text-primary mb-3">📋 Project Process</h6>
          <ol className="small text-dark ps-3">
            <li>💳 Make Payment</li>
            <li>📝 Share Project Details & Prototype</li>
            <li>📸 Upload Payment Screenshot</li>
            <li>🚀 Service Provider Starts Work</li>
            <li>📦 Final Delivery with Support</li>
          </ol>
          <button className="btn btn-outline-secondary btn-sm w-100 mt-2" onClick={() => setView("main")}>
            ← Back
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingContactPanel;

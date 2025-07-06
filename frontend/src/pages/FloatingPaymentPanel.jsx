// components/FloatingPaymentPanel.jsx
import React, { useState } from "react";

const FloatingPaymentPanel = ({ onClose, pricing, user, provider }) => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    setScreenshot(file);
  };

  const handleConfirmDirectPayment = () => {
    if (!selectedPlan) return alert("Please select a plan.");
    if (!provider.paymentDetails?.upi) return alert("UPI ID not available.");

    alert(`🟢 Please pay ₹${pricing[selectedPlan]} to ${provider.paymentDetails.upi} and upload a screenshot.`);

    // You could later send this data to backend
    console.log({
      plan: selectedPlan,
      upi: provider.paymentDetails.upi,
      screenshotFile: screenshot,
    });

    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.panel}>
        <button style={styles.closeButton} onClick={onClose}>✖</button>

        <h4 className="mb-3">💳 Make Payment</h4>

        <select
          className="form-select mb-3"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          <option value="">-- Select Plan --</option>
          {pricing.basic && <option value="basic">Basic – ₹{pricing.basic}</option>}
          {pricing.standard && <option value="standard">Standard – ₹{pricing.standard}</option>}
          {pricing.premium && <option value="premium">Premium – ₹{pricing.premium}</option>}
        </select>

        {selectedPlan && (
          <div className="bg-light p-3 rounded border mb-3">
            <p><strong>Pay to UPI ID:</strong> {provider.paymentDetails?.upi || "Not available"}</p>

            {provider.paymentDetails?.qrCodeUrl && (
              <img
                src={provider.paymentDetails.qrCodeUrl}
                alt="QR Code"
                className="img-fluid border mb-2"
                style={{ maxWidth: "180px", height: "auto" }}
              />
            )}

            <label className="form-label fw-bold mt-2">Upload Screenshot (Optional)</label>
            <input
              type="file"
              className="form-control mb-3"
              accept="image/*"
              onChange={handleScreenshotUpload}
            />

            <button className="btn btn-success w-100" onClick={handleConfirmDirectPayment}>
              ✅ I Have Made the Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  },
  panel: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    position: "relative",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)"
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer"
  }
};

export default FloatingPaymentPanel;

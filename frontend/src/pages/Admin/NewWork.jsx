import React, { useEffect, useState } from "react";
import axios from "axios";

const NewWorks = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const storedUser = localStorage.getItem("user");
  const serviceProvider = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    const fetchQuotes = async () => {
      if (!serviceProvider?._id) return;
      try {
        const res = await axios.get(`/api/quotes/by-provider/${serviceProvider._id}`);
        //console.log("Service provider ID in localStorage:", serviceProvider?._id);
        setQuotes(res.data);
      } catch (err) {
        console.error("Failed to fetch quotes", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [serviceProvider]);

  if (!serviceProvider) return <p>Please login as a service provider.</p>;
  if (loading) return <p>Loading new work...</p>;
  if (!quotes.length) return <p>No new work yet.</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📥 New Work Requests</h2>

      {quotes.map((quote, index) => (
        <div key={index} className="card shadow-sm p-3 mb-4">
          <h5>{quote.projectName}</h5>
          <p><strong>Description:</strong> {quote.description}</p>
          <p><strong>Minimum Days:</strong> {quote.minDays}</p>
          <p><strong>Requested By:</strong> {quote.userId?.name}</p>
          <p><strong>Email:</strong> {quote.userId?.email}</p>

          {quote.files?.length > 0 && (
            <div className="mt-2">
              <strong>Attachments:</strong>
              <ul>
                {quote.files.map((file, idx) => (
                  <li key={idx}>
                    <a
                      href={`http://localhost:5173${file.url}`} // ✅ Corrected path
                      target="_blank"
                      rel="noreferrer"
                    >
                      {file.filename}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewWorks;

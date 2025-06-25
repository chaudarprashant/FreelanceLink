import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminServices = ({ token }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/service-provider", {
          headers: { Authorization: token },
        });

        if (response.data) {
          setServices([response.data]); // wrap in array
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Error fetching services", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [token]);

  if (loading) {
    return <div className="text-center mt-5">Loading services...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Services</h2>
      {services.length === 0 ? (
        <p className="text-center">No services found.</p>
      ) : (
        <div className="row">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4 mb-4" key={service._id}>
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">{service.category}</h5>
                  <p className="card-text"><strong>Phone:</strong> {service.phone}</p>
                  <p className="card-text"><strong>Skills:</strong> {service.skills}</p>
                  <p className="card-text"><strong>Projects:</strong> {service.projects}</p>
                  <p className="card-text"><strong>Experience:</strong> {service.experience} years</p>
                  <p className="card-text"><strong>Bio:</strong> {service.bio}</p>

                  {service.portfolio && (
                    <p className="card-text">
                      <strong>Portfolio:</strong>{" "}
                      <a href={service.portfolio} target="_blank" rel="noopener noreferrer">
                        {service.portfolio}
                      </a>
                    </p>
                  )}

                  {service.pricing && (
                    <>
                      <p className="card-text"><strong>Pricing:</strong></p>
                      <ul className="mb-2">
                        {service.pricing.basic && <li>Basic: {service.pricing.basic}</li>}
                        {service.pricing.standard && <li>Standard: {service.pricing.standard}</li>}
                        {service.pricing.premium && <li>Premium: {service.pricing.premium}</li>}
                      </ul>
                    </>
                  )}

                  {service.socialLinks && (
                    <>
                      <p className="card-text"><strong>Social Links:</strong></p>
                      <ul>
                        {service.socialLinks.linkedin && (
                          <li><a href={service.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        )}
                        {service.socialLinks.twitter && (
                          <li><a href={service.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        )}
                        {service.socialLinks.github && (
                          <li><a href={service.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        )}
                        {service.socialLinks.instagram && (
                          <li><a href={service.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        )}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminServices;

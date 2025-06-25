import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceProvidersList = () => {
  const { category } = useParams();
  const [serviceProviders, setServiceProviders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/service-provider/filter?category=${category}`);
        setServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };
    fetchServiceProviders();
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-center text-2xl font-semibold mb-6">{category} Providers</h2>
      {serviceProviders.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {serviceProviders.map((provider) => (
            <div 
              key={provider._id} 
              className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-6 m-4 cursor-pointer"
              onClick={() => navigate(`/service-provider/${provider._id}`)}
            >
              <div className="flex-1 p-4">
                <h5 className="text-xl font-bold text-gray-900 mb-2">{provider.userId?.name || "No Name"}</h5>
                <p className="text-gray-700 mb-2">{provider.bio}</p>
                <p className="text-gray-600 mb-1"><strong>Experience:</strong> {provider.experience} years</p>
                <p className="text-gray-600 mb-1"><strong>Skills:</strong> {provider.skills}</p>
                <p className="text-gray-600"><strong>Phone:</strong> {provider.phone}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No service providers found for {category}.</p>
      )}
    </div>
  );
};

export default ServiceProvidersList;

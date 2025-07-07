// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ServiceProviderForm = () => {
//   const [formData, setFormData] = useState({
//     category: "",
//     phone: "",
//     skills: "",
//     projects: "",
//     experience: "",
//     bio: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setMessage("Please log in first.");
//       return;
//     }

//     // Fetch user details
//     axios
//       .get("http://localhost:5000/api/auth/me", { headers: { Authorization: token } })
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching user", err);
//         setMessage("Error fetching user details.");
//       });

//     // Fetch existing service provider details
//     axios
//       .get("http://localhost:5000/api/service-provider", { headers: { Authorization: token } })
//       .then((res) => {
//         if (res.data) {
//           setFormData(res.data);
//         }
//       })
//       .catch(() => {
//         console.log("No existing service provider details found.");
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const token = localStorage.getItem("token");
//     if (!token) {
//       setMessage("Unauthorized. Please log in.");
//       setLoading(false);
//       return;
//     }

//     if (!user) {
//       setMessage("User details not found. Try logging in again.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/service-provider",
//         { ...formData, userId: user._id },
//         { headers: { Authorization: token } }
//       );

//       setMessage(res.data.message);
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setMessage(error.response?.data?.message || "Error submitting form");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow-lg">
//         <h2 className="text-center mb-4">Service Provider Form</h2>
//         {message && <div className="alert alert-info">{message}</div>}

//         {user && (
//           <div className="alert alert-secondary">
//             <strong>Logged in as:</strong> {user.name} ({user.role})
//           </div>
//         )}

//         {user && user.role === "admin" ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <select className="form-control" name="category" value={formData.category} onChange={handleChange} required>
//                 <option value="">Select Service Category</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Graphic Design">Graphics and Design</option>
//                 <option value="Digital Marketing">Digital Marketing</option>
//                 <option value="AI Services">AI Services</option>
//                 <option value="Logo Design">Logo Design</option>
//                 <option value="Video Editing">Video Editing</option>
//                 <option value="Product Photography">Product Photography</option>
//                 <option value="Content Writing">Content Writing</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <input
//                 type="tel"
//                 className="form-control"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" name="projects" placeholder="Projects" value={formData.projects} onChange={handleChange} required />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="experience"
//                 placeholder="Years of Experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//                 min="0"
//               />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} required />
//             </div>
//             <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </form>
//         ) : (
//           <p className="text-danger text-center">Only admins can register service providers.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceProviderForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceProviderForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    phone: "",
    skills: "",
    projects: "",
    experience: "",
    bio: "",
    portfolio: "",
    socialLinks: {
      linkedin: "",
      twitter: "",
      github: "",
      instagram: "",
    },
    pricing: {
      basic: "",
      standard: "",
      premium: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please log in first.");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, { headers: { Authorization: token } })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Error fetching user", err);
        setMessage("Error fetching user details.");
      });

    axios
  .get(`${import.meta.env.VITE_BACKEND_URL}/api/service-provider`, { headers: { Authorization: token } })
  .then((res) => {
    if (res.data) {
      const fetchedData = res.data;

      setFormData({
        category: fetchedData.category || "",
        phone: fetchedData.phone || "",
        skills: fetchedData.skills || "",
        projects: fetchedData.projects || "",
        experience: fetchedData.experience || "",
        bio: fetchedData.bio || "",
        portfolio: fetchedData.portfolio || "",
        pricing: {
          basic: fetchedData.pricing?.basic || "",
          standard: fetchedData.pricing?.standard || "",
          premium: fetchedData.pricing?.premium || "",
        },
        socialLinks: {
          linkedin: fetchedData.socialLinks?.linkedin || "",
          twitter: fetchedData.socialLinks?.twitter || "",
          github: fetchedData.socialLinks?.github || "",
          instagram: fetchedData.socialLinks?.instagram || "",
        },
      });
    }
  })
.catch(() => {
        console.log("No existing service provider details found.");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("socialLinks.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [key]: value },
      }));
    } else if (name.startsWith("pricing.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        pricing: { ...prev.pricing, [key]: value },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Unauthorized. Please log in.");
      setLoading(false);
      return;
    }

    if (!user) {
      setMessage("User details not found. Try logging in again.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/service-provider`,
        { ...formData, userId: user._id },
        { headers: { Authorization: token } }
      );
      setMessage(res.data.message);
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage(error.response?.data?.message || "Error submitting form");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Service Provider Form</h2>
        {message && <div className="alert alert-info">{message}</div>}

        {user && (
          <div className="alert alert-secondary">
            <strong>Logged in as:</strong> {user.name} ({user.role})
          </div>
        )}

        {user && user.role === "admin" ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <select className="form-control" name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select Service Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphics and Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI Services">AI Services</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Product Photography">Product Photography</option>
                <option value="Content Writing">Content Writing</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="projects" placeholder="Projects" value={formData.projects} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required min="0" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="url" className="form-control" name="portfolio" placeholder="Portfolio Link" value={formData.portfolio} onChange={handleChange} />
            </div>

            <h5 className="mt-3">Pricing</h5>
            <div className="mb-3">
              <input type="text" className="form-control" name="pricing.basic" placeholder="Basic Plan Price" value={formData.pricing.basic} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="pricing.standard" placeholder="Standard Plan Price" value={formData.pricing.standard} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="pricing.premium" placeholder="Premium Plan Price" value={formData.pricing.premium} onChange={handleChange} />
            </div>

            <h5 className="mt-3">Social Media Links</h5>
            <div className="mb-3">
              <input type="url" className="form-control" name="socialLinks.linkedin" placeholder="LinkedIn" value={formData.socialLinks.linkedin} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="url" className="form-control" name="socialLinks.twitter" placeholder="Twitter" value={formData.socialLinks.twitter} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="url" className="form-control" name="socialLinks.github" placeholder="GitHub" value={formData.socialLinks.github} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="url" className="form-control" name="socialLinks.instagram" placeholder="Instagram" value={formData.socialLinks.instagram} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        ) : (
          <p className="text-danger text-center">Only admins can register service providers.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderForm;

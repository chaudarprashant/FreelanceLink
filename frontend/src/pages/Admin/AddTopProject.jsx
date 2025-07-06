import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

const AddTopProject = () => {
  const [form, setForm] = useState({
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const providerId = user?._id;

    try {
      await axios.post('http://localhost:5000/api/projects', {
        ...form,
        providerId,
      });
      alert('Project posted successfully!');
      setForm({ category: '', image: '' });
    } catch (err) {
      console.error(err);
      alert('Error posting project');
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Add Your Top Project</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label className="form-label">Project Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="e.g., Web Development"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Paste hosted image URL"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTopProject;

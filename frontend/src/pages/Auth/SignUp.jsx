// SignUp Component
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/signup", form);
            alert("Signup successful!");
            navigate("/login");
        } catch (err) {
            alert("Error signing up");
        }
    };

    return (
     
          <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter your name" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Enter your password" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <div className="d-flex gap-3">
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="role" value="user" checked={form.role === "user"} onChange={handleChange} required />
                                        <label className="form-check-label">User 'service user'</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="role" value="admin" checked={form.role === "admin"} onChange={handleChange} required />
                                        <label className="form-check-label">Admin 'service provider'</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            <NavLink to="/login">Login</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
    );
}

export default SignUp;

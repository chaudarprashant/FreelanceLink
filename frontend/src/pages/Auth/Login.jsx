
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, form);
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            console.log("User object:", data.user);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", JSON.stringify(data.user)); // 👈 Add this line

            alert("Login successful!");

            // Redirect based on role
            if (data.role === "admin") {
                
                navigate("/admin");  // Redirect to admin page
            } else {
                navigate("/home");  // Redirect normal users to home
            }
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <Layout>
            <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
        </Layout>
    );
}

export default Login;

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js"; // Ensure .js extension
import serviceProviderRoutes from "./routes/serviceProviderRoutes.js";
import connectDB from "./config/db.js";


dotenv.config();
const app = express();


// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "*" })); // Restrict CORS for security

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/service-provider", serviceProviderRoutes);
app.get("/", (req, res) => res.send("API is working"));


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

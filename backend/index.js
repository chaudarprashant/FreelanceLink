import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js"; // Ensure .js extension
import serviceProviderRoutes from "./routes/serviceProviderRoutes.js";
import connectDB from "./config/db.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import projectRoutes from './routes/projectRoutes.js'

dotenv.config();
const app = express();


// Middleware
app.use(express.json());
// app.use(cors({ origin: process.env.CLIENT_URL || "*" })); // Restrict CORS for security
// app.use(cors({
//   origin: "https://freelancelink.onrender.com", // or "*" for all
//   credentials: true,
// }));
// app.use(cors({
//   origin: [
//     "http://localhost:5000",                         // local dev
//     "https://freelancelink.onrender.com"    // deployed frontend (if any)
//   ],
//   credentials: true
// }));
// app.use(cors({
//   origin: "*"
// }));
app.use(cors({
  origin: "https://freelancelink.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Connect to Database
connectDB();

// Static file serving for uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/service-provider", serviceProviderRoutes);
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/quotes", quoteRoutes); // ✅ Register Quote Routes
app.use('/api/projects', projectRoutes)

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// config/db.js
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};
export default connectDB;
// // Database Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("✅ Database connected");
//     } catch (err) {
//         console.error("❌ Database connection error:", err);
//         process.exit(1); // Exit process if DB connection fails
//     }
// };
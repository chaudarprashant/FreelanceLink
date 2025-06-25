// // models/ServiceProvider.js
// import mongoose from "mongoose";

// const serviceProviderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   category: String,
//   phone: String,
//   skills: String,
//   projects: String,
//   experience: String,
//   bio: String,
// });
// export default mongoose.model("ServiceProvider", serviceProviderSchema);


import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: String,
  phone: String,
  skills: String,
  projects: String,
  experience: String,
  bio: String,
  portfolio: String,
  socialLinks: {
    linkedin: String,
    twitter: String,
    github: String,
    instagram: String,
  },
  pricing: {
    basic: String,
    standard: String,
    premium: String,
  },
});

export default mongoose.model("ServiceProvider", serviceProviderSchema);

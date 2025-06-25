// import express from "express";
// import ServiceProvider from "../models/ServiceProvider.js";
// import User from "../models/User.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // 👉 To post the admin service in database
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ message: "Access Denied. Admins only." });
//     }

//     const { category, phone, skills, projects, experience, bio } = req.body;

//     if (!category || !phone || !skills || !projects || !experience || !bio) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     const newServiceProvider = new ServiceProvider({
//       userId: req.user.id,
//       category,
//       phone,
//       skills,
//       projects,
//       experience,
//       bio,
//     });

//     await newServiceProvider.save();
//     res.status(201).json({ message: "Service Provider details added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding details", error });
//   }
// });

// // 👉 To find the User is admin or user and get service provided by that user
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const provider = await ServiceProvider.findOne({ userId: req.user.id }).populate("userId", "name email");
//     if (!provider) return res.status(404).json({ message: "No details found" });
//     res.json(provider);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching details", error });
//   }
// });

// // 👉 To filter service providers by category
// router.get("/filter", async (req, res) => {
//   try {
//     const { category } = req.query;
//     const filter = category ? { category } : {};
    
//     const providers = await ServiceProvider.find(filter).populate("userId", "name email");
//     res.json(providers);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching service providers", error });
//   }
// });


// // GET /api/service-provider/:id
// router.get("/service-provider/:id", async (req, res) => {
//   const providerId = req.params.id;
//   try {
// const provider = await ServiceProvider.findById(providerId).populate("userId", "name email");
//     if (!provider) return res.status(404).json({ error: "Not found" });
//     res.json(provider);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });


// export default router;

import express from "express";
import ServiceProvider from "../models/ServiceProvider.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 👉 To post the admin service in database
router.post("/", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    const {
      category,
      phone,
      skills,
      projects,
      experience,
      bio,
      portfolio,
      socialLinks,
      pricing,
    } = req.body;

    if (!category || !phone || !skills || !projects || !experience || !bio) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newServiceProvider = new ServiceProvider({
      userId: req.user.id,
      category,
      phone,
      skills,
      projects,
      experience,
      bio,
      portfolio,
      socialLinks,
      pricing,
    });

    await newServiceProvider.save();
    res.status(201).json({ message: "Service Provider details added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding details", error });
  }
});

// 👉 To find the User is admin or user and get service provided by that user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const provider = await ServiceProvider.findOne({ userId: req.user.id }).populate("userId", "name email");
    if (!provider) return res.status(404).json({ message: "No details found" });
    res.json(provider);
  } catch (error) {
    res.status(500).json({ message: "Error fetching details", error });
  }
});

// 👉 To filter service providers by category
router.get("/filter", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};

    const providers = await ServiceProvider.find(filter).populate("userId", "name email");
    res.json(providers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service providers", error });
  }
});

// GET /api/service-provider/:id
router.get("/service-provider/:id", async (req, res) => {
  const providerId = req.params.id;
  try {
    const provider = await ServiceProvider.findById(providerId).populate("userId", "name email");
    if (!provider) return res.status(404).json({ error: "Not found" });
    res.json(provider);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

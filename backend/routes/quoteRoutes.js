import express from "express";
import multer from "multer";
import path from "path";
import Quote from "../models/Quote.js";
import fs from "fs";

const router = express.Router();

// 🗂 Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "uploads/quotes";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

// 🛠 POST /api/quotes/create
router.post("/create", upload.array("files", 5), async (req, res) => {
  try {
    const { projectName, description, minDays, userId, serviceProviderId } = req.body;

    const fileData = req.files.map((file) => ({
      filename: file.filename,
      url: `/uploads/quotes/${file.filename}`, // Assuming static folder is served
    }));

    const quote = new Quote({
      projectName,
      description,
      minDays,
      userId,
      // serviceProviderId,
      serviceProviderId: req.body.serviceProviderId,
      files: fileData,
    });

    await quote.save();

    res.status(201).json({ success: true, quote });
  } catch (err) {
    console.error("Quote submission failed:", err);
    res.status(500).json({ success: false, message: "Failed to submit quote." });
  }
});

// GET all quotes for a specific service provider
router.get('/by-provider/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const quotes = await Quote.find({ serviceProviderId: id }).populate('userId'); // populate client info
    res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


export default router;

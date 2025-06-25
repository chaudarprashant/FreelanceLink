
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: "User registered" });
    } catch (error) {
        res.status(400).json({ error: "User already exists" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    //res.json({ token, user });

     // ✅ Only send safe public user info (not password)
    const safeUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
        // Add more fields if needed
    };
    res.json({ token, role: user.role , user: safeUser});
});

export default router;


router.get("/me", authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user details", error });
    }
  });
  
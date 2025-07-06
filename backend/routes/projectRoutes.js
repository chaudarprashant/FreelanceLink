import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const { category, image, providerId } = req.body;

    const newProject = new Project({
      category,
      image,
      providerId,
      isTopProject: true,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err });
  }
});

// GET /api/projects/top
router.get('/top', async (req, res) => {
  try {
    const topProjects = await Project.find({ isTopProject: true })
      .limit(6)
      .populate('providerId', 'name');
    res.json(topProjects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching top projects', error: err });
  }
});

export default router;

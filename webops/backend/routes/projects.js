// backend/routes/projects.js
const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Create a new project
router.post('/add', async (req, res) => {
  const newProject = new Project(req.body);
  try {
    await newProject.save();
    res.status(201).send(newProject);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all projects
router.get('/api/contacts', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
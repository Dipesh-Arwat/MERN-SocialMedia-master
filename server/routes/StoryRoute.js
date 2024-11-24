import express from "express";
import StoryModel from "../models/StoryModel.js";
import UserModel from "../models/userModel.js";
import upload from "../upload.js";

const router = express.Router();

router.post("/upload", upload.single("storyImage"), async (req, res) => {
    try {
      // Log request body and file
      console.log("Request body:", req.body);
      console.log("Uploaded file:", req.file);
  
      const { userId } = req.body;
      const storyImage = req.file?.path;
  
      // Validate required fields
      if (!userId || !storyImage) {
        return res.status(400).json({ message: "Missing userId or storyImage" });
      }
  
      // Save story to the database
      const newStory = new StoryModel({
        userId : req.user._id,
        storyImage : `https://mern-socialmedia-master-backend.onrender.com/images/${req.file.filename}`,
        type,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
  
      const savedStory = await newStory.save();
      await UserModel.findByIdAndUpdate(req.user._id, { $push: { stories: newStory._id } });
      console.log("Story saved successfully:", savedStory);
      res.status(201).json(savedStory);
    } catch (error) {
      console.error("Error uploading story:", error);
      res.status(500).json({ message: "Server error while uploading story" });
    }
  });

// Fetch all stories
router.get("/", async (req, res) => {
    try {
        const stories = await StoryModel.find().populate("userId", "username profilePicture");
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

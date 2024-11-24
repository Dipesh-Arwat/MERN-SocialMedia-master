import express from "express";
import StoryModel from "../models/StoryModel.js";
import upload from "./UploadRoute.js";

const router = express.Router();

router.post("/upload", upload.single("storyImage"), async (req, res) => {
    const { userId } = req.body; // Assuming userId is coming from the request body
    const storyImage = req.file.path; // Path to the uploaded image

    try {
        // Save the story in the database
        const newStory = new StoryModel({
            userId,
            storyImage,
        });

        const savedStory = await newStory.save();
        res.status(201).json(savedStory); // Respond with the saved story
    } catch (error) {
        res.status(500).json({ message: error.message });
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

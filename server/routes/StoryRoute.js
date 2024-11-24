import express from "express";
import { createStory, getStories } from "../controllers/StoryController.js";
const router = express.Router();

router.post("/", createStory); // Upload story
router.get("/", getStories); // Fetch stories

export default router;

import StoryModel from "../models/StoryModel.js";

// Create a Story
export const createStory = async (req, res) => {
  const { userId, image } = req.body;

  try {
    const story = new StoryModel({ userId, image });
    const savedStory = await story.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Stories
export const getStories = async (req, res) => {
  try {
    const stories = await StoryModel.find({
      expiresAt: { $gte: Date.now() },
    }).populate("userId", "username profilePicture");
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

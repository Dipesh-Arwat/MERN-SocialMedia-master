import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
      default: () => Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    },
  },
  {
    timestamps: true,
  }
);

const StoryModel = mongoose.model("Stories", storySchema);

export default StoryModel;

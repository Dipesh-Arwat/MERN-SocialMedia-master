import mongoose from "mongoose";

const StorySchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    storyImage: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now, expires: 86400 }, 
  },
  { timestamps: true }
);

const StoryModel = mongoose.model("Story", StorySchema);
export default StoryModel;

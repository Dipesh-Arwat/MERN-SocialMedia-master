import mongoose from "mongoose";

const StorySchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    storyImage: { type: String, required: true }, 
    type: { type: String, enum: ['image', 'video'], required: true }, 
    createdAt: { type: Date, default: Date.now}, 
    expiresAt: { type: Date, required: true },  
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  
  },
  { timestamps: true }
);

const StoryModel = mongoose.model("Story", StorySchema);
export default StoryModel;

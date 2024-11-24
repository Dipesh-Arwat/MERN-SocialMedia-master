import React from "react";
import "./Story.css";

const Story = ({ story }) => {
  return (
    <div className="story">
      <img src={story.storyImage} alt="story" className="storyImage" />
      <span>{story.userId.username}</span>
    </div>
  );
};

export default Story;

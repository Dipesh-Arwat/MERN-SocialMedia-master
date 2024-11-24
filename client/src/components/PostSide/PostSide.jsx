import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";
import Story from "../Story/Story";

const PostSide = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch("https://mern-socialmedia-master-backend.onrender.com/stories");
      const data = await response.json();
      setStories(data);
    };
    fetchStories();
  }, []);

  return (
    <div className="PostSide">
      <PostShare/>
      <div className="stories">
        {stories.map((story) => (
          <Story key={story._id} story={story} />
        ))}
      </div>
      <Posts/>
    </div>
  );
};

export default PostSide;

import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";
import axios from "axios";

const PostSide = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const { data } = await axios.get("/stories");
      setStories(data);
    };

    fetchStories();
  }, []);

  return (
    <div className="PostSide">
      <PostShare/>
      <div className="Stories">
        {stories.map((story) => (
          <div key={story._id}>
            <img src={story.image} alt="story" />
            <span>{story.userId.username}</span>
          </div>
        ))}
      </div>
      <Posts/>
    </div>
  );
};

export default PostSide;

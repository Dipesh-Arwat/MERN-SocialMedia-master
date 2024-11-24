import React, { useState } from "react";
import axios from "axios";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadStoryModal from "../UploadStoryModal/UploadStoryModal";
const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStoryUpload = async (storyImage, userId) => {
    // Create a FormData object to send the file and user info
    const formData = new FormData();
    formData.append("storyImage", storyImage);
    formData.append("userId", userId);
  
    try {
      // Use Axios to send a POST request to the backend
      const response = await axios.post(
        "https://mern-socialmedia-master-backend.onrender.com/stories/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Specify that the request contains form-data
          },
        }
      );
  
      console.log("Story uploaded successfully:", response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.error("Failed to upload story:", error.response.status, error.response.data);
      } else if (error.request) {
        // Request was made, but no response was received
        console.error("No response from the server:", error.request);
      } else {
        // Something else happened during the request setup
        console.error("Error uploading story:", error.message);
      }
    }
  };
  

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage" />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                  posts.filter((post) => post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
          </Link>
        </span>
      )}

      <button onClick={() => setIsModalOpen(true)}>Upload Story</button>
      {isModalOpen && (
        <UploadStoryModal
          onClose={() => setIsModalOpen(false)}
          onUpload={handleStoryUpload}
        />
      )}

    </div>
  );
};

export default ProfileCard;

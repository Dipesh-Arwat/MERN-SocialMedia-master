import React, { useState } from "react";
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

  const handleStoryUpload = async (storyImage) => {
    // Create a FormData object to send the file and user info
    const formData = new FormData();
    formData.append("storyImage", storyImage); // Attach the selected image
  
    try {
      // Send a POST request to the backend to upload the story
      const response = await fetch("/stories/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the backend can handle the file
        },
        body: formData, // Attach the form data (image)
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log("Story uploaded:", result);
        // Optionally, update the UI or show a success message
      } else {
        console.error("Error uploading story:", result.message);
      }
    } catch (error) {
      console.error("Error uploading story:", error);
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

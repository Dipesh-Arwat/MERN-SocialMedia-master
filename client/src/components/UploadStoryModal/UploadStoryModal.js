import React, { useState } from "react";
import "./UploadStoryModal.css";

const UploadStoryModal = ({ onClose, onUpload }) => {
  const [storyImage, setStoryImage] = useState(null);

  const handleImageChange = (e) => {
    setStoryImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (storyImage) {
        const userId = "current_user_id"; // Replace with the actual logged-in user ID
        onUpload(storyImage, userId);
        onClose();
      } else {
        console.error("No image selected for upload.");
      }
  };

  return (
    <div className="uploadStoryModal">
      <div className="modalContent">
        <h3>Upload Story</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UploadStoryModal;

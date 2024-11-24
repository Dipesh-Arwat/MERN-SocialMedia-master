import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadStory } from "../../actions/UploadAction";

const UploadStory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleUpload = (e) => {
    e.preventDefault();

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);

      const story = {
        userId: user._id,
        image: fileName,
      };

      dispatch(uploadStory(story, data));
      setImage(null);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  return (
    <div className="UploadStory">
      <button onClick={() => imageRef.current.click()}>Add Story</button>
      <input
        type="file"
        ref={imageRef}
        style={{ display: "none" }}
        onChange={onImageChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadStory;

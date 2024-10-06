import React, { useState } from 'react';
import './AddPic.css'; // Ensure to create this CSS file for styling

const AddPic = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <div key={index} className="image-preview">
        <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
      </div>
    ));
  };

  return (
    <div className="addpic-container">
      <div className="upload-area">
        <label htmlFor="file-upload" className="file-upload-label">
          <div className="add-photo-placeholder">
            <span className="plus-icon">+</span>
            <div>Add photos</div>
            <div className="photo-instructions">1600 x 1200 for hi res</div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="file-input"
          />
        </label>
      </div>
      <div className="image-previews">{renderImages()}</div>
      <div className="photo-instructions">Max. 4 photos per product</div>
    </div>
  );
};

export default AddPic;

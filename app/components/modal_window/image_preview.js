import React from 'react';

const ImagePreviewModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-btn" onClick={onClose}>×</div>
        <img src={imageUrl} alt="Preview" />
      </div>
    </div>
  );
};

export default ImagePreviewModal;

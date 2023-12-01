// ImagePreviewAfterSelectModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ThirdModal from './image_preview_last'; // Импортируем третье модальное окно

const ImagePreviewAfterSelectModal = ({ imageUrl, onClose }) => {
  const [isNextModalOpen, setNextModalOpen] = useState(false);

  const handleNext = () => {
    setNextModalOpen(true);
  };

  return (
    <div className="modal">
      <div className="after_select">
        <div className='tittle flex_jc_sb'>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>Редактировать</h2>
          <button className='blue' onClick={handleNext}>
            <p>Далее</p>
          </button>
        </div>
        <div className='box'>
          <div className='post_img'>
            <img src={imageUrl} alt="Preview" />
          </div>
        </div>
        <div className="close-btn" onClick={onClose}>×</div>
        {isNextModalOpen && (
          <ThirdModal
            imageUrl={imageUrl}
            onClose={() => setNextModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ImagePreviewAfterSelectModal;

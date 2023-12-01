import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImagePreviewAfterSelectModal from './image_preview';
import ThirdModal from './image_preview_last';

const CombinedModal = ({ onClose }) => {
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [step, setStep] = useState(1);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setStep(1);
    onClose();
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-btn" onClick={handleCloseModal}>×</div>
        <div className='tittle'>
          <h2>Создать новый пост</h2>
        </div>
        <div className='photo_btn'>
          <FontAwesomeIcon icon={faPhotoFilm} style={{ fontSize: '100px' }} />
          <h2>Перетащите видео и фото сюда</h2>

          {step === 1 && (
            <>
              {!selectedImage && (
                <>
                  <button className='create_btn' onClick={handleChooseFileClick}>
                    Выбрать с компьютера
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                  />
                </>
              )}
            </>
          )}

          {step === 2 && selectedImage && (
            <ImagePreviewAfterSelectModal
              imageUrl={selectedImage}
              onClose={handleCloseModal}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {step === 3 && (
            <ThirdModal
              imageUrl={selectedImage}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedModal;




import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight,
  faVolumeXmark,
  faPlay,
  faPause,
  faEllipsis,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const StoryModal = ({ profilePic, additionalImages, username, currentIndex, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setTimeout(() => {
        handleNextImage();
      }, 8000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex, isPlaying]);

  useEffect(() => {
    let progressTimer;

    if (isPlaying) {
      let progressIncrement = 1;
      progressTimer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress + progressIncrement >= 100) {
            handleNextImage();
            return 0;
          }
          return prevProgress + progressIncrement;
        });
      }, 50);
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [isPlaying, currentImageIndex]);

  useEffect(() => {
    setShowLeftButton(currentImageIndex > 0);
    setShowRightButton(currentImageIndex < additionalImages.length - 1);
  }, [currentImageIndex]);

  const handleNextImage = () => {
    setProgress(0);
    const nextIndex = currentImageIndex + 1;

    if (nextIndex < additionalImages.length) {
      setCurrentImageIndex(nextIndex);
      setShowLeftButton(true); // Показать стрелку влево после просмотра первой картинки
    } else {
      // Достигнут конец изображений
      setIsPlaying(false);
      closeModal();
    }
  };

  const handlePrevImage = () => {
    setProgress(0);
    const prevIndex = currentImageIndex - 1;

    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }

    setShowRightButton(prevIndex < additionalImages.length - 1);
    setShowLeftButton(prevIndex > 0);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentImage =
    currentImageIndex < additionalImages.length ? additionalImages[currentImageIndex] : profilePic;

  return (
    <div className='story-modal'>
      <FontAwesomeIcon icon={faArrowLeft} className='prev_story_none' />
      {showLeftButton && <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevImage} className='prev_story' />}
      <div className='modal-content-story'>
        <div className='story_prof_info'>
          <div className='person_img df'>
            <img src={profilePic} alt="profile_pic" />
            <h4>{username}</h4>
            <h4 className='time'>1 days ago</h4>
          </div>
          <div className='story_media'>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={handleTogglePlay} />
            <FontAwesomeIcon icon={faVolumeXmark} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className="progress-bars">
          {additionalImages.map((image, index) => (
            <div key={index} className="progress-bar">
              <div className="progress" style={{ width: `${index === currentImageIndex ? progress : 0}%` }}></div>
            </div>
          ))}
        </div>
        <div className='story_box'>
          <img src={currentImage} alt="Story" />
        </div>
      </div>
      <div className="close-btn" onClick={closeModal}>×</div>
      {showRightButton && <FontAwesomeIcon icon={faArrowRight} onClick={handleNextImage} className='next_story'/>}
    </div>
  );
};

StoryModal.propTypes = {
  profilePic: PropTypes.string.isRequired,
  additionalImages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default StoryModal;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const ThirdModal = ({ imageUrl, onClose }) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    // Ограничиваем ввод до 2200 символов
    const truncatedValue = inputValue.slice(0, 2200);
    setDescription(truncatedValue);
  };

  const characterCount = description.length;
  const maxCharacterLimit = 2200;

  return (
    <div className="no_rgba">
      <div className="third_modal after_select">
        <div className='tittle flex_jc_sb'>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>Создать пост</h2>
          <button className='blue'>
            <p>Поделиться</p>
          </button>
        </div>
        <div className='boxes'>
          <div className='box'>
            <div className='post_img'>
              <img src={imageUrl} alt="Preview" />
            </div>
          </div>
          <div className='description'>
            <div className='header_prof_pic lg'>
              <img src="/img/profile_pic.png" alt="Profile Pic" />
              <h4>terrylucas</h4>
            </div>
            <input
              placeholder={`Добавьте описание `}
              value={description}
              onChange={handleDescriptionChange}
            />
            <FontAwesomeIcon icon={faFaceSmile} className='smile' />
            <div className='count_symbols'>
              {`${characterCount}/${maxCharacterLimit}`}
            </div>
          </div>
        </div>
        <div className="close-btn" onClick={onClose}>×</div>
      </div>
    </div>
  );
};

export default ThirdModal;

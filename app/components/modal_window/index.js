import React, { useRef, useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';

const PostModal = ({ onClose }) => {
  // Создаем реф для доступа к элементу input типа file
  const fileInputRef = useRef();
  // Состояние для хранения выбранного изображения
  const [selectedImage, setSelectedImage] = useState(null);

  // Обработчик изменения выбранного файла
  const handleFileInputChange = (e) => {
    // Получаем файл из события
    const file = e.target.files[0];
    if (file) {
      // Создаем объект FileReader для чтения содержимого файла как URL
      const reader = new FileReader();
      // Устанавливаем обработчик события onloadend, который сработает после завершения чтения файла
      reader.onloadend = () => {
        // Устанавливаем выбранное изображение в состояние
        setSelectedImage(reader.result);
      };
      // Читаем содержимое файла как URL
      reader.readAsDataURL(file);
    }
  };

  // Обработчик клика по кнопке выбора файла
  const handleChooseFileClick = () => {
    // Принудительно кликаем на невидимый input типа file
    fileInputRef.current.click();
  };

  // Обработчик закрытия предварительного просмотра изображения
  const handleCloseImagePreview = () => {
    // Сбрасываем выбранное изображение
    setSelectedImage(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Кнопка закрытия модального окна */}
        <div className="close-btn" onClick={onClose}>×</div>
        <div className='tittle'>
          <h2>Создать новый пост</h2>
        </div>
        <div className='photo_btn'>
          <h2>Перетащите видео и фото сюда</h2>
          {/* Если выбрано изображение, показываем модальное окно предварительного просмотра */}
          {selectedImage && (
            <ImagePreviewModal
              imageUrl={selectedImage}
              onClose={handleCloseImagePreview}
            />
          )}
          {/* Если изображение не выбрано, показываем кнопку выбора файла */}
          {!selectedImage && (
            <>
              {/* Кнопка выбора файла */}
              <button className='create_btn' onClick={handleChooseFileClick}>
                Выбрать с компьютера
              </button>
              {/* Скрытый input типа file для выбора файла */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;




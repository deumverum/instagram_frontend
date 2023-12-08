import React, { useState } from 'react';

const PostInfo = ({ post, onClose }) => {
  // Состояния для управления введенным комментарием и списком комментариев
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Обработчик изменения текста в поле ввода комментария
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Обработчик отправки комментария
  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      // Добавляем новый комментарий в список
      setComments([...comments, comment]);
      // Очищаем поле ввода после отправки комментария
      setComment('');
    }
  };

  // Обработчик удаления комментария по индексу
  const handleCommentDelete = (index) => {
    const newComments = [...comments];
    // Удаляем комментарий из списка по индексу
    newComments.splice(index, 1);
    // Обновляем список комментариев
    setComments(newComments);
  };

  return (
    <div className="modal">
      <div className="after_select">
        <div className='inform'>
          <div className='box'>
            <div className='post_img'>
              <img src={post.imageUrl} alt={`Post ${post.caption}`} />
            </div>
          </div>
          <div className='description'>
            <div className='header_prof_pic lg'>
              <img src="/img/profile_pic.png" alt="Profile Pic" />
              <h4>terrylucas</h4>
            </div>
            <div className='comments'>
              {comments.length > 0 ? (
                // Если есть комментарии, отображаем каждый из них
                comments.map((comment, index) => (
                  <div key={index} className='comment'>
                    {comment}
                    {/* Кнопка для удаления комментария */}
                    <button className='delete' onClick={() => handleCommentDelete(index)}>Удалить</button>
                  </div>
                ))
              ) : (
                // Если нет комментариев, отображаем сообщение
                <div className='no-comments'>
                  <h3>Нет комментариев</h3>
                </div>
              )}
            </div>
            <input 
              placeholder='Добавьте комментарий'
              value={comment}
              onChange={handleCommentChange}
            />
            {/* Кнопка для отправки комментария */}
            <button onClick={handleCommentSubmit}>Отправить</button>
          </div>
        </div>
        {/* Кнопка для закрытия модального окна */}
        <div className="close-btn" onClick={onClose}>×</div>
      </div>
    </div>
  );
};

export default PostInfo;

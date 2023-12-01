// components/myposts/index.js

import React, { useState } from 'react';
import MyPost from './mypost';
import PostInfo from '../post_info';

const MyPosts = ({ posts }) => {
  // Состояния для отслеживания открытия модального окна и выбранного поста
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Обработчик клика по посту
  const handlePostClick = (index) => {
    // Устанавливаем выбранный пост и открываем модальное окно
    setSelectedPost(posts[index]);
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  // Создаем массив JSX для отображения постов
  const showPosts = posts.map((item, index) => (
    <MyPost
      key={index}
      imageUrl={item.imageUrl}
      altText={item.caption}
      onPostClick={() => handlePostClick(index)}
    />
  ));

  return (
    <div className='grid_posts'>
      {showPosts}

      {/* Проверяем, открыто ли модальное окно и есть ли выбранный пост */}
      {isModalOpen && selectedPost && (
        // Отображаем компонент PostInfo с данными выбранного поста и функцией для закрытия модального окна
        <PostInfo post={selectedPost} onClose={closeModal} />
      )}
    </div>
  );
};

export default MyPosts;






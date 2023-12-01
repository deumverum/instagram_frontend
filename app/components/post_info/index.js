// components/post_info/index.js
import React from 'react';

const PostInfo = ({ post, onClose }) => {
  return (
    <div className="post-info">
      <h2>{post.caption}</h2>
      <img src={post.imageUrl} alt={`Post ${post.caption}`} />
      {/* Добавьте другие элементы информации, если необходимо */}
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default PostInfo;

// components/post_info/index.js
import React from 'react';

// const PostInfo = ({ post, onClose }) => {
//   return (
//     <div className="modal">
//       <h2>{post.caption}</h2>
//       <img src={post.imageUrl} alt={`Post ${post.caption}`} />
//       <div className="close-btn" onClick={onClose}>×</div>
//     </div>
//   );
// };

const PostInfo = ({ post, onClose }) => {
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
            </div>
        </div>
        <div className="close-btn" onClick={onClose}>×</div>
      </div>
    </div>
  );
};

export default PostInfo;

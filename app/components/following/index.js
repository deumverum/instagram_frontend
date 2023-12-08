import React, { useState } from 'react';

const FollowingModal = ({ onClose, followingList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedFollowingList, setUpdatedFollowingList] = useState([...followingList]);

  const handleRemove = (followedId) => {
    const updatedList = updatedFollowingList.filter((followed) => followed.id !== followedId);
    setUpdatedFollowingList(updatedList);
  };

  const handleFollow = (followedId) => {
    console.log(`Followed ${followedId}`);
  };

  const filteredFollowing = updatedFollowingList.filter((followed) =>
    followed.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="following-modal">
      <div className='followers-content'>
        <div className='tittle_nav'>
          <button></button>
          <h2>Following</h2>
          <button onClick={onClose}>✖</button>
        </div>
        <div className='tittle_search'>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='list'>
          {filteredFollowing.map((followed) => (
            <div className='person' key={followed.id}>
              <div className='person_img'>
                <img src={followed.profilePic} alt="Profile" />
              </div>
              <div className='person_nav'>
                <div className='person_info'>
                  <h4>{followed.nickname}</h4>
                  <p>·</p>
                  <button onClick={() => handleFollow(followed.id)}>Follow</button>
                </div>
                <h3>{followed.fullName}</h3>
              </div>
              <button className='remove' onClick={() => handleRemove(followed.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingModal;



import React, { useState } from 'react';

const FollowersModal = ({ followersList, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [deletedFollowers, setDeletedFollowers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  const handleRemove = (followerId) => {
    setDeletedFollowers((prevDeletedFollowers) => [...prevDeletedFollowers, followerId]);
    setFollowedUsers((prevFollowedUsers) => prevFollowedUsers.filter((id) => id !== followerId));
  };

  const handleFollow = (followerId) => {
    setFollowedUsers((prevFollowedUsers) => [...prevFollowedUsers, followerId]);
    setDeletedFollowers((prevDeletedFollowers) => prevDeletedFollowers.filter((id) => id !== followerId));
  };

  const filteredFollowers = followersList.filter((follower) =>
    follower.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="followers-modal">
      <div className='followers-content'>
        <div className='tittle_nav'>
          <button></button>
          <h2>Followers</h2>
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
          {filteredFollowers.map((follower) => (
            <div className="person" key={follower.id}>
              <div className='person_img'>
                <img src={follower.profilePic} alt="Profile" />
              </div>
              <div className="person_nav">
                <div className="person_info">
                  <h4>{follower.nickname}</h4>
                  <p>·</p>
                  {deletedFollowers.includes(follower.id) && 
                    <button onClick={() => handleFollow(follower.id)}>Follow</button>
                  }
                </div>
                <h3>{follower.fullName}</h3>
              </div>
              {!deletedFollowers.includes(follower.id) &&
              <button className="remove" onClick={() => handleRemove(follower.id)}>
                Remove
              </button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;




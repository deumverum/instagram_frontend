import React from 'react';
import PropTypes from 'prop-types';

const Story = ({ profilePic, nickname, onClick }) => {
  return (
    <div className='story' onClick={onClick}>
      <img src={profilePic} alt="profile_pic" />
      <h4>{nickname}</h4>
    </div>
  );
};

Story.propTypes = {
  profilePic: PropTypes.string.isRequired, // Изменил на profilePic
  nickname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Story;




import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Story from './story';
import StoryModal from '../story_modal/index';

const Stories = ({ stories }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (profilePic, additionalImages, username) => {
    setModalData({ profilePic, additionalImages, username, currentIndex: 0 });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const showStories = stories.map((story, index) => (
    <Story
      key={index}
      profilePic={story.profilePic}
      nickname={story.nickname}
      onClick={() => openModal(story.profilePic, story.additionalImages, story.nickname)}
    />
  ));

  return (
    <div className='stories'>
      {showStories}
      {modalData && (
        <StoryModal
          profilePic={modalData.profilePic}
          additionalImages={modalData.additionalImages}
          username={modalData.username}
          currentIndex={modalData.currentIndex}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

Stories.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default Stories;


'use client'
// MyProfile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faEllipsis,
  faMagnifyingGlass,
  faMessage,
  faSquarePlus,
  faCompass,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import PostModal from '../components/modal_window/index';
import MyPosts from '../components/myposts';
import FollowersModal from '../components/followers/index';
import FollowingModal from '../components/following/index';

export default function MyProfile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFollowersModalOpen, setFollowersModalOpen] = useState(false);
  const [isFollowingModalOpen, setFollowingModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openFollowersModal = () => setFollowersModalOpen(true);
  const closeFollowersModal = () => setFollowersModalOpen(false);
  const openFollowingModal = () => setFollowingModalOpen(true);
  const closeFollowingModal = () => setFollowingModalOpen(false);

  const posts = [
    { imageUrl: '../../img/post1.png', caption: 'Пост 1' },
    { imageUrl: '../../img/post2.png', caption: 'Пост 2' },
    { imageUrl: '../../img/post3.png', caption: 'Пост 3' },
    { imageUrl: '../../img/post4.png', caption: 'Пост 4' },
    { imageUrl: '../../img/post5.png', caption: 'Пост 5' },
    { imageUrl: '../../img/post6.png', caption: 'Пост 6' },
  ];

  return (
    <div className="main">
      <div className="main_width">
        <header className="header">
          <div className="logo">
            <img src="/img/instagram_logo.png" alt="Instagram Logo" />
          </div>
          <div className="search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="icon-ellipsis"
            />
            <input placeholder="Поиск" />
          </div>
          <div className="nav_btns">
            <div className="nav_btn">
              <button>
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </div>
            <div className="nav_btn">
              <button>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </div>
            <div className="nav_btn">
              <button onClick={openModal}>
                <FontAwesomeIcon icon={faSquarePlus} />
              </button>
            </div>
            <div className="nav_btn">
              <button>
                <FontAwesomeIcon icon={faCompass} />
              </button>
            </div>
            <div className="nav_btn">
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="header_prof_pic">
              <img src="/img/profile_pic.png" alt="Profile" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

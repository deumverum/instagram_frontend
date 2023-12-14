'use client'
// MyProfile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {
  faEllipsis,
  faMagnifyingGlass,
  faMessage,
  faSquarePlus,
  faCompass,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import PostModal from '../components/modal_window/index';
import MyPosts from '../components/myposts';
import FollowersModal from '../components/followers/index';
import FollowingModal from '../components/following/index';
import Link from 'next/link';

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

  const followersList = [
    {
      id: 1,
      nickname: 'alikhan.b',
      fullName: 'Alikhan Bukeikhanov',
      profilePic: '/img/alihan.jpg',
    },
    {
      id: 2,
      nickname: 'akbaev.j',
      fullName: 'Akbaev Zhakyp',
      profilePic: '/img/jakyp.jpg',
      },
    {
      id: 3,
      nickname: 'amanzholov.s',
      fullName: 'Amanzholov Sadyk',
      profilePic: '/img/amanjol.jpg',
    },
    {
      id: 4,
      nickname: 'ahmet.b',
      fullName: 'Beremzhanov Akhmet',
      profilePic: '/img/ahmet.jpg',
    },
    {
      id: 5,
      nickname: 'alimhan.e',
      fullName: 'Ermekov Alimkhan',
      profilePic: '/img/alimhan.jpg',
    },
    {
      id: 6,
      nickname: 'khalil.g',
      fullName: 'Gabbasov Khalil',
      profilePic: '/img/halil.jpg',
    },
    {
      id: 7,
      nickname: 'zhansha.d',
      fullName: 'Zhansha Dosmukhamedov',
      profilePic: '/img/jansha.jpg',
    },
  ];
  const followingList = [
    {
      id: 1,
      nickname: 'alikhan.b',
      fullName: 'Alikhan Bukeikhanov',
      profilePic: '/img/alihan.jpg',
    },
    {
      id: 2,
      nickname: 'akbaev.j',
      fullName: 'Akbaev Zhakyp',
      profilePic: '/img/jakyp.jpg',
      },
    {
      id: 3,
      nickname: 'amanzholov.s',
      fullName: 'Amanzholov Sadyk',
      profilePic: '/img/amanjol.jpg',
    },
    {
      id: 4,
      nickname: 'ahmet.b',
      fullName: 'Beremzhanov Akhmet',
      profilePic: '/img/ahmet.jpg',
    },
    {
      id: 5,
      nickname: 'alimhan.e',
      fullName: 'Ermekov Alimkhan',
      profilePic: '/img/alimhan.jpg',
    },
    {
      id: 6,
      nickname: 'khalil.g',
      fullName: 'Gabbasov Khalil',
      profilePic: '/img/halil.jpg',
    },
    {
      id: 7,
      nickname: 'zhansha.d',
      fullName: 'Zhansha Dosmukhamedov',
      profilePic: '/img/jansha.jpg',
    },
  ];

  return (
    <div className="main">
      <div className='header_line'>
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
                <Link href="/home" className='link'><FontAwesomeIcon icon={faHouse} /></Link>
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
      <div className='main_width'>
      <div className="profile_info">
        <div className="prof_pic">
          <img src="/img/profile_pic.png" alt="Profile" />
        </div>
        <div className="prof_info">
          <div className="prof_flex">
            <h1>terrylucas</h1>
            <button>Follow</button>
            {isModalOpen && <PostModal onClose={closeModal} />}
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="prof_flex">
            <button className="prof_btn">1258 posts</button>
            <button className="prof_btn" onClick={openFollowersModal}>
              4M followers
            </button>
            <button className="prof_btn" onClick={openFollowingModal}>
              1.250 following
            </button>
          </div>
          <div className="prof_flex">
            <h2>Terry Lucas</h2>
          </div>
        </div>
      </div>
      <div className="prof_nav">
        <div className="post_btns">
          <div className="post_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
            </svg>
            <button>POSTS</button>
          </div>
          <div className="post_btn">
            <button>REELS</button>
          </div>
          <div className="post_btn">
            <button>POSTS</button>
          </div>
          <div className="post_btn">
            <button>POSTS</button>
          </div>
          <div className="post_btn">
            <button>POSTS</button>
          </div>
        </div>
      </div>
      <MyPosts posts={posts} />
      {isFollowersModalOpen && (
        <FollowersModal
          followersList={followersList}
          onClose={closeFollowersModal}
        />
      )}
      {isFollowingModalOpen && (
        <FollowingModal
          followingList={followingList}
          onClose={closeFollowingModal}
        />
      )}
      </div>
    </div>
  );
}

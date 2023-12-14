'use client'
// MyProfile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {
  faMagnifyingGlass,
  faComment,
  faBookmark,
  faMessage,
  faSquarePlus,
  faCompass,
  faHeart,
  faFaceSmile,
} from '@fortawesome/free-regular-svg-icons';
import Stories from '../components/stories';

export default function MyProfile() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const storiesData = [
    { profilePic: '/img/alihan.jpg', nickname: 'User1', additionalImages: ['/img/stoty_test.jpg', '/img/alihan.jpg', '/img/alimhan.jpg'] },
    { profilePic: '/img/alihan.jpg', nickname: 'User2', additionalImages: ['/img/alihan.jpg', '/img/alihan.jpg'] },
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
      <div className="main_width">
        <div className='homepage'>
          <div className='right_side'>
            <Stories stories={storiesData} />
            <div className='post_lg'>
              <div className='profile'>
                <div className="person m0 jc_sb">
                  <div className='person_img df'>
                    <img src="\img\amanjol.jpg" alt="Profile" />
                    <div className="person_info">
                      <h4>terrylucas</h4>
                    </div>
                  </div>
                  <button>...</button>
                </div>
              </div>
              <div className='post_lg_img'>
                <img src='\img\postlg.jpg'></img>
              </div>
              <div className='like_coms_save'>
                <div className='like_coms'>
                  <button className='reset'>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className='reset'>
                    <FontAwesomeIcon icon={faComment} />
                  </button>
                </div>
                <button className='reset'>
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </div>
              <div className='post_lg_info'>
                <div className=''>
                  <h4>1.069 likes</h4>
                </div>
                <div className='more'>
                  <h4>terrylucas</h4>
                  <p>Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</p>
                  <button>...more</button>
                </div>
                <div className='view'>
                  <button>View all 100 comments</button>
                </div>
                <div className='time'>
                  <p>1 hour ago</p>
                </div>
                <div className='comment'>
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <input type="text" placeholder='Add a comment'/>
                  <button>Post</button>
                </div>
              </div>
            </div>
          </div>
          <div className='left_side'>
            <div className='suggestions'>
              <h3>Suggestions For You</h3>
              <button>See All</button>
            </div>
            <div className='suggestions_info'>
                <div className="person m0">
                  <div className='person_img'>
                    <img src="\img\amanjol.jpg" alt="Profile" />
                  </div>
                  <div className="person_nav">
                    <div className="person_info">
                      <h4>terrylucas</h4>
                    </div>
                    <h3>Followed by terylucas + 2 more</h3>
                  </div>
                  <button>Follow</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

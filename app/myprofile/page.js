// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
'use client'
import React, { useState } from 'react';
import PostModal from '../components/modal_window/index';
import MyPosts from "../components/myposts";

export default function MyProfile() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
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
            <header className="header">
                <div className="logo">
                    <img src="/img/instagram_logo.png"></img>
                </div>
                <div className="search">
                    <input placeholder="Поиск"></input>
                </div>
                <div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                </div>
            </header>
            <div className="profile_info">
                <div className="prof_pic">
                    <img src="/img/profile_pic.png"></img>
                </div>
                <div className="prof_info">
                    <div className="prof_flex">
                        <h1>terrylucas</h1>
                        <button>Follow</button>
                        <button onClick={openModal}>Создать пост</button>
                        {isModalOpen && <PostModal onClose={closeModal} />}
                        {/* icon */}
                    </div>
                    <div className="prof_flex">
                        <button className="prof_btn">1258 posts</button>
                        <button className="prof_btn">4M followers</button>
                        <button className="prof_btn">1.250 following</button>
                    </div>
                    <div className="prof_flex">
                        <h2>Terry Lucas</h2>
                    </div>
                </div>
            </div>
            <div className="prof_nav">
                <div className="post_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <g clip-path="url(#clip0_2153_1365)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.375H0.75C0.55 0.375 0.375 0.55 0.375 0.75V11.25C0.375 11.45 0.55 11.625 0.75 11.625H11.25C11.45 11.625 11.625 11.45 11.625 11.25V0.75C11.625 0.55 11.45 0.375 11.25 0.375ZM1.125 1.125H3.875V3.875H1.125V1.125ZM1.125 4.625H3.875V7.375H1.125V4.625ZM3.875 10.875H1.125V8.125H3.875V10.875ZM7.375 10.875H4.625V8.125H7.375V10.875ZM7.375 7.375H4.625V4.625H7.375V7.375ZM7.375 3.875H4.625V1.125H7.375V3.875ZM10.875 10.875H8.125V8.125H10.875V10.875ZM10.875 7.375H8.125V4.625H10.875V7.375ZM10.875 3.875H8.125V1.125H10.875V3.875Z" fill="#262626"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2153_1365">
                    <rect width="12" height="12" fill="white"/>
                    </clipPath>
                    </defs>
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
                <MyPosts posts={posts}/>
        </div>
    )
}

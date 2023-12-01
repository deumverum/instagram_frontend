// components/myposts/index.js
import React from 'react';
import MyPost from './mypost';

const MyPosts = ({ posts }) => {
  const showPosts = posts.map((item, index) => (
    <MyPost key={index} imageUrl={item.imageUrl} altText={item.caption} />
  ));

  return <div className='grid_posts'>{showPosts}</div>;
};

export default MyPosts;



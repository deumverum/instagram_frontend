// components/myposts/mypost/index.js
import React, { useState } from 'react';

export default function MyPost({ imageUrl, altText, onPostClick }) {
  return (
    <div className="post" onClick={onPostClick}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
}

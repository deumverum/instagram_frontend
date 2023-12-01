// components/myposts/mypost/index.js
export default function MyPost({ imageUrl, altText }) {
    return (
      <div className="post">
        <img src={imageUrl} alt={altText} />
      </div>
    );
  }
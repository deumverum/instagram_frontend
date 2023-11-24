import MyPost from './mypost';

export default function MyPosts(props) {
  const { posts } = props;
  const showPosts = posts.map((item, index) => (
    <MyPost key={index} imageUrl={item.imageUrl} altText={item.altText} />
  ));

  return <div className='grid_posts'>{showPosts}</div>;
}

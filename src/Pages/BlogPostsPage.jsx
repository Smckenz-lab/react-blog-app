
import {useEffect} from 'react'
import {useState} from 'react'
import BlogPost from '../components/post';

export default function BlogPostPage({ postsData }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching posts:', error));
  }, []);

 //Updated to fetch post from API//
 //Took out post author and date because the API does not provide that info.//

  return (
    <div>
      <h1 className='postHeader'>All Posts</h1>
      <p className='postHeader'>Check out what the community has to say 😄 </p>
      <div>
        {posts.map((post) => (
          <BlogPost key={post.id} postData={post}/>
        ))}
      </div>
    </div>
  );
}
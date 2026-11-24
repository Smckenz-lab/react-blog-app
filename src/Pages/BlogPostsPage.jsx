
import {useEffect} from 'react'
import {useState} from 'react'
import {initialPostData} from '../BlogData/blogdata';
import { useAuth } from '../Login/AuthUser';
import {Link} from 'react-router'
import BlogPost from '../components/post';


export default function BlogPostPage({ postsData }) {
  const {user} = useAuth();
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => setPosts(data))
//     .catch(error => console.error('Error fetching posts:', error));
//   }, []);

//  //Updated to fetch post from API//
//  //Took out post author and date because the API does not provide that info.//



  return (
    <div>
      <h1 className='postHeader'>All Posts</h1>
      <p className='postHeader'>Check out what the community has to say 😄 </p>
      <div>
        {postsData.map((post) => (
          <div key={post.id}>
          <BlogPost postData={post}/>
          </div>
        ))}
      </div>
      {user && (
        <div className="newpost-container">
          <Link className="newpost-btn" to="/new-post">
            New Post+
          </Link>
        </div>
      )}
    </div>
  );
}
import React, {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router';
import {initialPostData} from '../BlogData/blogdata';
import LikeBtn from '../components/LikeBtn';
import CommentBox from '../components/CommentBox';
import Comment from '../components/Comments';

//Imported for login//
import { useAuth } from '../Login/AuthUser';
import axios from 'axios';


//Updated to fetch post and comments from API//
export default function IndividualPostPage() {
    const {id} = useParams();
    const {user} = useAuth();
    const [ authorUser, setAuthorUser] = useState(null);
  

    const post = initialPostData.find((p) => p.id.toString() === id);
    const [comments, setComments] = useState(
        post && post.comments ? post.comments : []
    );

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(response => response.json())
    //     .then((postData) => {
    //         console.log("Fetched post data:", postData);
    //         setPost(postData);
    //         return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    //     })
    //     .then(response => response.json())
    //     .then((userData) => {
    //         setAuthorUser(userData);
    //     })
    //     .catch(error => console.error('Error fetching post or user:', error));

    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //     .then(response => response.json())
    //     .then(commentsData => {
    //         console.log("Fetched Comments data:", commentsData);
    //         const formatComments = commentsData.map(comment => ({
    //             id: comment.id,
    //             name: comment.name,
    //             body: comment.body,
    //         }));
    //         setComments(formatComments);
    // })
    // .catch(error => console.error("No comments found for this post", error));
    // }, [id]);


//     const handleAddComment = (newCommentData) => {
//         axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
//             name: newCommentData.author,
//             body: newCommentData.content,
//         })
//         .then(response => {
//             console.log("Posted new comment:", response.data);
//             const addedComment = {
//                 id: response.data.id,
//                 author: response.data.name,
//                 content: response.data.body
//             };
//             setComments((prevComments) => [...prevComments, addedComment]);
//         })
//         .catch((error) => {
//             console.error("Error adding comment:", error);
//         });
//   };

    if(!post) {
        return <div>Looks like this post is no where to be found...</div>;
    }

    const handleAddComment = (newComment) => {
        setComments((prevComments) =>  [...prevComments, newComment]);
    };
    return (
        <div>
            <Link to='/posts'>← Back</Link>

            <article>
                <h1>{post.title}</h1>
                {/* Got rid of date and author and this now fetches user data
                {user && <p>By {user.name} ({user.email})</p>} */}

                <p>By {post.author} on {post.date}</p>
                <p>{post.content || post.body}</p>

                <LikeBtn />
            </article>

            {/*Comment section*/}
            {/*Updated for only users who are logged in*/}
            <section>
                <Comment commentsData={comments || []} />
            
                {user ? (
                    <CommentBox onAddComment={handleAddComment}/> 
                ) : (
                    <div>
                        <p>Please log in to leave a comment</p>
                        <Link to="/login">Login To Comment</Link>
                    </div>
                )}
            </section>
        </div>
        
    );
}
import React, {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router';
import {initialPostData} from '../BlogData/blogdata';
import LikeBtn from '../components/LikeBtn';
import CommentBox from '../components/CommentBox';
import Comment from '../components/Comments';

//Updated to fetch post and comments from API//
export default function IndividualPostPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then((postData) => {
            console.log("Fetched post data:", postData);
            setPost(postData);
            return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        })
        .then(response => response.json())
        .then(userData => setUser(userData))
        .catch(error => console.error('Error fetching post or user:', error));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(commentsData => {
            console.log("Fetched Comments data:", commentsData);
            const formatComments = commentsData.map(comment => ({
                id: comment.id,
                name: comment.name,
                body: comment.body,
            }));
            setComments(formatComments);
    })
    .catch(error => console.error("No comments found for this post", error));
    }, [id]);


    const handleAddComment = (newComments) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            name: newCommentData.author,
            body: newCommentData.content,
        })
        .then(response => {
            console.log("Posted new comment:", response.data);
            const addedComment = {
                id: response.data.id,
                author: response.data.name,
                content: response.data.body
            };
            setComments((prevComments) => [...prevComments, addedComment]);
        })
        .catch((error) => {
            console.error("Error adding comment:", error);
        });
  };

    if(!post) {
        return <div>No post found...</div>;
    }
    return (
        <div>
            <Link to='/'>← Back</Link>

            <article>
                <h1>{post.title}</h1>
                {/*Got rid of date and author and this now fetches user data*/}
                {user && <p>By {user.name} ({user.email})</p>}
                <p>{post.body}</p>

                <LikeBtn />
            </article>

            {/*Comment section*/}
            <section>
                <CommentBox onAddComment={handleAddComment} />
                <Comment commentsData={comments || []} />
            </section>
        </div>
        
    )
}
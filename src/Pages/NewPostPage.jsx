import {useState} from 'react'
import { useNavigate, Link} from 'react-router'
import {useAuth} from '../Login/AuthUser';

export default function NewPostPage({onAddPost}) {
    const {user} = useAuth();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    if(!user) {
        return(
            <div>
            <h2>Sorry, friend. You must be logged in first to create a post.</h2>
            <Link to="/login">Login</Link>
            </div>
        );
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        if(!title.trim()|| !content.trim()) {
            setError('All fields must be filled in. Please try again.');
            return;
        }
        const newPost = {
            id:  Date.now(),
            title: title.trim(),
            content: content.trim(),
            author: user.username,
            date: new Date().toLocaleDateString(),
            comments:[]
        };

        onAddPost(newPost);
        navigate('/posts');
    };

    return (
        <div>
            <Link to="/posts">← Back To All Posts</Link>
            <h2>Create a New Post</h2>
            {error && <p style={{ color: 'red'}}>{error}</p>}

            <form onSubmit={handleSubmit} className="comment-form">
                <div className="form">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form">
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-btn">Publish Post</button>
            </form>
        </div>
    );

}





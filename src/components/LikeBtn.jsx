import React, {useState} from 'react';

export default function LikeBtn() {
    const [likes, setLikes] = useState(68);
    const[liked, setLiked] = useState(false);

    const handleLike = () => {
        if(liked) {
            setLikes(likes -1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    return (
        <button onClick={handleLike} className={`like-btn ${liked ? 'liked': ''}`}>
          ❤️ {likes} {likes === 1 ? 'Like' : 'Likes'}
        </button>
    );
}
import React from 'react';

export default function Comments({commentsData}) {
    return (
        <section className="comments-section"> 
        <h3>Comments ({commentsData.length})</h3>
        {commentsData.length === 0 ? (
            <p className="no-comment">No comments yet. Be the first to comment!</p>
        ) : (
            <ul className="comment-lst">
                {commentsData.map((comment) => (
                    <li key={comment.id} className="comment-item">
                        <strong> {comment.author}</strong>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        )}
        </section>
    );
}
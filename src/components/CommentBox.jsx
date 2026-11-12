import React, { useState } from 'react';

export default function CommentBox({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    onAddComment({
      id: Date.now(),
      author: author,
      content: content,
    });

    setAuthor('');
    setContent('');
  };

  return (
    <div className="CommentBox-container">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form">
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            id="author"
            className="CommentBox-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="content">Comment:</label>
          <textarea
            id="content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Comment</button>
      </form>
    </div>
  );
}


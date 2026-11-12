import React from 'react';
import LikeBtn from './LikeBtn';
import {Link} from 'react-router'

export default function BlogPost({postData}) {
    return (
        <article className="post-card">
            <h2 className="post-title">{postData.title}</h2>
            {/*Removed content and changed to body for the API fetch*/}
            <div className="post-content"><p>{postData.body}</p></div>
            <div className= "post-meta">
                {/*Author and date will come up as undefined due to API fetch*/}
                <span className="post-author"> By: {postData.author}</span>
                <span className="post-date"> Published: {postData.date}</span>
            </div>
            <div className="post-footer">
                <Link to={`/post/${postData.id}`}>View More</Link>
                <LikeBtn />
            </div>
        </article>
    );
}
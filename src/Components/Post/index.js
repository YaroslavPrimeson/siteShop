import React from 'react';
import "./index.scss"

const Post = ({title, text}) => {
    return (
        <div className="post">
            <h2 className="postTitle">
                {title}
            </h2>
            <p className="postText">
                {text}
            </p>
        </div>
    );
};

export default Post;

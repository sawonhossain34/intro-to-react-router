import React from 'react';
import { Link } from 'react-router-dom';
import "./Post.css"

const Post = ({post}) => {
    const {body,id,title} = post;
    return (
        <div className='post'>
            <h5>Id:{id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>show details</Link>
            <button>Show post details</button>
        </div>
    );
};

export default Post;
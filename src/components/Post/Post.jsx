import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./Post.css"

const Post = ({post}) => {
    const {body,id,title} = post;


    const handleNavigation = () => {
        Navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>Id:{id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>show details</Link>
            <Link to ={`/post/${id}`}><button>Show post details</button>
            <button onClick={handleNavigation}>with button handler</button>
</Link>
        </div>
    );
};

export default Post;
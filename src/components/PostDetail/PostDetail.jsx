import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,body,useId} = post
    console.log(post);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about your post : {id}</h3>
            <p>{title}</p>
            <h5><small>{body}</small></h5>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
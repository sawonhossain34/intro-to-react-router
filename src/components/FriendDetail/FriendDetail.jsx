import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Name : {friend.name}</h3>
            <p>email;{friend.email}</p>
            <p>phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;
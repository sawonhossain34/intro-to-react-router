import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>This is Friends : {friends.length}</h3>
            <div>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend> )
                }
            </div>
        </div>
    );
};

export default Friends;
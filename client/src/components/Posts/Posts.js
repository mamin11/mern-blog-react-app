import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        <>
        <h1>A list of posts</h1>
        <Post />
        <Post />
        <Post />
        </>
    );
}

export default Posts;
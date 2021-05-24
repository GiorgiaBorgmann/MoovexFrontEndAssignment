import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])
    const [showPosts, setShowPosts] = useState(false)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts ')
            .then((response) => {
                setPosts(response.data.filter(post => post.userId > 1))
                setSavedPosts(response.data.filter(post => post.userId = 1))
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    const handleSavedPost = () => {
        setShowPosts(true)
    }
    const handlePost = () => {
        setShowPosts(false)
    }

    if (posts && showPosts === true) {
        return (
            <div>
                <button onClick={handleSavedPost}>Save Posts</button>
                <button onClick={handlePost}>Posts</button>
                {posts.map((e) => {
                    return <Card body={e.body} title={e.title} />
                })}
            </div>
        );
    }
    else {
        return (
            <div>
                <button onClick={handleSavedPost}>Save Posts</button>
                <button onClick={handlePost}>Posts</button>
                {savedPosts.map((e) => {
                    return <Card body={e.body} title={e.title} />
                })}
            </div>
        );
    }

}
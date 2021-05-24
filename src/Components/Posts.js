import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])
  const [showPosts, setShowPosts] = useState(false)
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts ')
                .then((response) => {
                    setPosts(response.data.filter(post => post.userId > 1))
                    setSavedPosts(response.data.filter(post => post.userId = 1))
                })
                .catch((error) => {
                    console.log(error);
                });
    },[])
    const handleSavedPost = () =>{
        setShowPosts(true)
    }
    const handlePost = () =>{
        setShowPosts(false)
    }
    console.log(posts)
  return (
        <div>
            <button onClick={handleSavedPost}>Save Posts</button>
            <button onClick={handlePost}>Posts</button>
            {posts.map((post)=>{
                <Card body={post.body} title={post.title}/>
            })}
        </div>
  );
}
// export default function handleposts() {
//     const [posts, setPosts] = useState([])
//     useEffect(()=> {
//         axios.post('https://jsonplaceholder.typicode.com/users', values)
//                 .then((response) => {
//                     setPosts(response)
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//     },[])
//     console.log(posts)
//     return (
//         <div>
//             <button>Save Posts</button>
//             <button>Posts</button>
//         </div>
//     )
        
    
// };

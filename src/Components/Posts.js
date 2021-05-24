import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Example() {
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])
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

  return (
        <div>
            <button>Save Posts</button>
            <button>Posts</button>
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

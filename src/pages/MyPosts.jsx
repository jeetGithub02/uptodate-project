import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import MyPost from '../components/MyPost';

const MyPosts = () => {

  let userId = "anurag24"
  const[myPosts, setMyPost]=useState([]);
  useEffect(()=>{
      axios.get(`http://127.0.0.1:5050/get-posts/${userId}`).then(res=>{
        setMyPost(res.data);
      })
  },[])

  return (
    <section className="py-3">
      <div className="container">
          <div className="flex items-center justify-between">
            <div  className='flex flex-row gap-3 flex-wrap'>
               <h2 className="text-xl font-medium">My Posts</h2>
               <Link className="px-3 py-1 rounded-md flex flex-row items-center gap-1 bg-sky-400 text-white" to='/new-post'>{<FaPlus/>}New post</Link>
            </div>
            <div>
              <span className='font-medium'>Sort By: </span>
              <select className='outline-none rounded-md px-1'>
                <option value="-1">Select</option>
                <option>Date ascending</option>
                <option>Date descending</option>
                <option>Likes ascending</option>
                <option>Dislikes ascending</option>
              </select>
              </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {
                myPosts.map(post=>
                 <MyPost key={post.id} {...post} />
                )
              }
          </div>
        
      </div>
    </section>
  )
}

export default MyPosts
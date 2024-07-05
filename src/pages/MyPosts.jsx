import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import MyPost from '../components/MyPost';
import { useCookies } from 'react-cookie';

const MyPosts = () => {
  const[cookies, setCookies, removeCookies]=useCookies();
  const[isDeleted, setIsDeleted]=useState(false)
  const[myPosts, setMyPosts]=useState([]);
  const navigate= useNavigate()

  const addTask =()=>{
      navigate('/add-post')
  }

  const handleDeletePost = (title, postId)=>{
    let flag = window.confirm(`Are you sure to delete this post? \n${title}`)
    if(flag){
        axios.delete(`http://127.0.0.1:5050/delete-post/${postId}`).then(res=>{
          alert(res.data)
          setMyPosts(pre=> pre.filter(post=> post.id !== postId))
          
        })
      
    }else{
    }
}


  useEffect(()=>{
     if(cookies.user){
         axios.get(`http://127.0.0.1:5050/get-posts/${cookies.user.userId}`).then(res=>{
        setMyPosts(res.data);
      })
     }else{
        navigate("/login")
     }
  },[])

  return (
    <section className="py-3">
      <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <div  className='flex flex-row gap-2 items-center '>
               <h2 className="font-medium">My Posts</h2>
               <button onClick={addTask} className="px-2 py-[2px] rounded-md flex flex-row items-center gap-1 bg-sky-400 text-white" to='/new-post'>{<FaPlus/>}New post</button>
            </div>
            <div>
              <span className='font-medium'>Sort By: </span>
              <select className='outline-none rounded-md px-1 w-[100px] md:w-auto text-[15px] '>
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
                 <MyPost key={post.id} {...post} handleDelete={handleDeletePost} />
                )
              }
          </div>
        
      </div>
    </section>
  )
}

export default MyPosts
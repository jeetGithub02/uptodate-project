import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi';
import { IoIosShareAlt } from 'react-icons/io';
import { useParams } from 'react-router-dom';

const SinglePost = (props) => {
    const[post, setPost]=useState(null)
    const param =useParams();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:5050/get-post/${param.postId}`)
        .then(res=>{
            // console.log(res.data[0])
            setPost(res.data[0])
        })
    },[])
  return (
    <>
      { post && 
        <div>
        <div className='px-2'>
            <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-8 col-span-12 border">
                   <div className="my-3">
                        <h1 className='text-3xl font-bold'>{post.title}</h1>
                        <div className='flex justify-between text-[18px] font-medium'><span>Author: {post.author}</span> <span className='italic text-slate-400'>{moment(post.date).format('MMMM Do YYYY, h:mm a')}</span></div>
                        <div>
                            <p className="my-2 text-lg">{post.body}</p>

                        </div>
                    </div>
                    <div><img src={post.image} alt="post-image" className="aspect-video sm:w-[80%] w-full mx-auto  rounded-lg"/></div>
                    <div className="flex gap-2 py-2 justify-between ">
                        <button className='bg-sky-400 text-white px-3 py-1 rounded-md '>Subscribe</button>
                       <div className='flex gap-2'>
                            <button className='bg-sky-400 text-white px-3 py-1 rounded-md flex items-center gap-1'><BiLike/>{post.reactions.likes}</button>
                            <button className='bg-sky-400 text-white px-3 py-1 rounded-md flex  items-center gap-1'><BiDislike/>{post.reactions.dislikes}</button>
                            <button className='bg-sky-400 text-white px-3 py-1 rounded-md flex items-center'><IoIosShareAlt/></button>
                       </div>
                        
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-12 border border-slate-400 rounded-lg p-3'>
                    <h1 className="font-bold text-lg">Newly Added</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
      }  
    </>
  )
}

export default SinglePost
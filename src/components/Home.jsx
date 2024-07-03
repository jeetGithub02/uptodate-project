import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const[allPost, setAllPost]=useState([])

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5050/get-posts`)
        .then(response=>{
            console.log(response.data)
           setAllPost(response.data)
        })
    },[])

  return (
    <main className='py-4 bg-slate-200' >
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
               {
                allPost.map(post=> 
                    <Post key={post.id} {...post} />
                )
               }
            </div>
        </div>
    </main>
  )
}

export default Home
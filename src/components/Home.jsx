import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const[allPost, setAllPost]=useState([])

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5050/get-posts`)
        .then(response=>{
            console.log(response.data)
           setAllPost(response.data.reverse())
        })
    },[])

  return (
    <main className='py-4 bg-slate-200' >
        <div className="px-[10px]">
          <div className="grid grid-cols-12 gap-2">
                <div className="md:col-span-2 col-span-12 flex md:flex-col flex-row gap-1 overflow-x-auto no-scroll">
                    <span className='font-bold bg-slate-400 border-slate-300 border px-2 md:py-1 rounded-md'>Category</span>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Tech</Link>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Geo </Link>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Business</Link>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Education</Link>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Gaming</Link>
                    <Link className='font-medium border-slate-300 border px-2 md:py-1 rounded-md hover:bg-slate-300'>Shop</Link>
                </div>
                <div className="md:col-span-10 col-span-12">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        allPost.map(post=> 
                            <Post key={post.id} {...post} />
                        )
                    }
                    </div>
                </div>
          </div>
        </div>
    </main>
  )
}

export default Home
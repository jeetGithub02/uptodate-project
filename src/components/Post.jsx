import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = (props) => {
   
  return (
    <div className="p-3 border rounded-xl bg-white" id={props.id}>
        <div ><Link to={`posts/${props.id}`}><img src={props.image} alt="post-image" className="aspect-video rounded-md " /></Link></div>
        <div className='my-2'>
            <h1 className='text-2xl  font-medium truncate2 leading-6 h-[51px]'>{props.title}</h1>
            <p className="truncate3 leading-5  h-[85px]">{props.description}</p>
        </div>
       <div className='flex items-center justify-between'> 
            <Link to={`/posts/${props.id}`} className='px-3 py-1 rounded-lg bg-sky-400 text-white'>View Post</Link>
            <span className="italic">{moment(props.date, "YYYYMMDD").fromNow()}</span>
        </div>
    </div>
  )
}

export default Post
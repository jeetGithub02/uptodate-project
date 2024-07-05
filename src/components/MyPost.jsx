import moment from 'moment'
import React from 'react'

const MyPost = (props) => {

  

  return (
    <div className="bg-white p-3 rounded-md">
      <div><img src={props.image} alt="post-image" className='aspect-video rounded-md border border-slate-300' /></div>
      <div className="mt-2"> 
        <h1 className='text-[18px] font-medium truncate'>{props.title}</h1>
        <div>{moment(props.date).format('MMMM Do YYYY, h:mm a')}</div>
        <div className="flex justify-between mt-2">
          <button className='text-white bg-sky-400 px-3 py-1 rounded-md'>Edit</button>
          <button onClick={()=>props.handleDelete(props.title, props.id)} className='text-white bg-sky-400 px-3 py-1 rounded-md'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyPost
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { RxCross1 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const AddPost = () => {
  const[cookies, setCookies, removeCookies] = useCookies();
  let navigate =useNavigate(); 
  
  const formik =useFormik({
  initialValues:{
      Category:"",
      Title:"",
      Description:"",
      Body:"",
      ImageURL:"",
      Author: cookies.user.name,
    },
    onSubmit:(post)=>{
      if(post.Category !== "-1"){
        console.log(post);
         if(cookies.user){
         axios.post(`http://127.0.0.1:5050/add-post/${cookies.user.userId}`,post).then(res=>{
            alert(res.data);
            navigate('/my-posts')
         })
      }

      }else{
        alert("Please select a category")
      }
     
    }
  })

 

  return (
    <section>
        <div className="container py-4">
                <form onSubmit={formik.handleSubmit} className='max-w-[800px] mx-auto shadow-xl md:p-10 px-3 rounded-lg  border border-slate-300'>
                    <div className="text-center flex justify-between items-center"><span className="flex-grow text-[25px] font-medium">New Post</span> <Link to="/my-posts">{<RxCross1/>}</Link></div>
                    <dl className="mt-3">
                        <dt className="font-medium">Category</dt>
                        <dd>
                          <select name="Category" onChange={formik.handleChange} id="" className='w-full bg-slate-100 rounded-md outline-slate-300 p-2'>
                            <option value="-1">Select category</option>
                            <option value="Tech">Tech</option>
                            <option value="Geo">Geo</option>
                            <option value="Business">Business</option>
                            <option value="Education">Education</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Shop">Shop</option>
                          </select>
                        </dd>

                        <dt className='font-medium mt-3'><label htmlFor='Title'>Title</label></dt>
                        <dd><input onChange={formik.handleChange} type="text"  name="Title"  className="p-2 bg-slate-100 rounded-md w-full outline-slate-300" id="Title" /></dd>

                        <dt className='font-medium mt-3'><label htmlFor='Desc'>Description Text</label></dt>
                        <dd><textarea onChange={formik.handleChange} name="Description" id="Disc" className='p-2 rounded-md bg-slate-100 outline-slate-300 w-full'></textarea></dd>
                        
                        <dt className='font-medium mt-3'><label htmlFor='Body'>Body Text</label></dt>
                        <dd><textarea onChange={formik.handleChange} name="Body" id="Body" className='p-2 rounded-md bg-slate-100 outline-slate-300 w-full'></textarea></dd>

                        <dt className='font-medium mt-3'><label htmlFor='Img'>Image URL</label></dt>
                        <dd><input onChange={formik.handleChange} type="text" name="ImageURL" className='p-2 rounded-md w-full bg-slate-100 outline-slate-300' id='Img' /></dd>
                        <dd className='mt-4 text-center'><button type="submit" className='text-white px-3 py-1 rounded-md bg-sky-400'>Upload</button></dd>
                    </dl>
                </form>
        </div>
    </section>
  )
}

export default AddPost
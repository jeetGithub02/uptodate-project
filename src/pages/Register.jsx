import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { loginImg } from '../assets';

const Register = () => {
  return (
    <main>
        <div className="container">
            <div className='grid grid-cols-2 py-4' >
                <div className='col-span-2 md:col-span-1'>
                     <form action="" className='rounded-lg py-4 px-10 max-w-[400px] mx-auto bg-white shadow-lg '>
                        <div className='text-center text-xl font-medium flex justify-between'> <span className="flex-grow">User Register</span> <Link to="/" >{<RxCross1/>}</Link></div>
                        <dl className='py-4'>
                            <dt className='font-medium mt-3'><label htmlFor="Name">Name</label></dt>
                            <dd><input type="password" name="text" id="Name"  className="bg-slate-200 p-2 w-full rounded-md outline-none" required/></dd>

                            <dt className="font-medium mt-3"><label htmlFor="Email">Email</label></dt>
                            <dd><input type="text" name='UserId' id="Email" className="bg-slate-200 p-2 w-full rounded-md outline-none" required /></dd>

                            <dt className="font-medium mt-3"><label htmlFor="UserId">UserId</label></dt>
                            <dd><input type="text" name='UserId' id="UserId" className="bg-slate-200 p-2 w-full rounded-md outline-none" required /></dd>

                            <dt className='font-medium mt-3'><label htmlFor="Password">Password</label></dt>
                            <dd><input type="password" name="Password" id="Password"  className="bg-slate-200 p-2 w-full rounded-md outline-none" required /></dd>

                            <dt className='my-3'><button type="submit" className='rounded-md py-2 bg-sky-400 text-white w-full'>Register</button></dt>
                        </dl>
                        <div className="text-center">Already have account? <Link className='text-sky-500 underline' to="/login">Login</Link></div>
                    </form>
                </div>
                <div className='col-span-2 md:block hidden md:col-span-1'>
                    <img src={loginImg} alt="login-image" className="loginImg" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Register
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const[isShow, setIsShow]=useState(false)
    function dropdownShow(){
            setIsShow(!isShow);
    }

    function handleLogin(e){
        if(e.target.id=="logout"){
            setIsShow(!isShow)
        }else if(e.target.id=="login"){
            navigate("/login");
            setIsShow(!isShow)
        }

    }
  return (
    <header className="bg-slate-200/20 backdrop-blur-md sticky top-0">
            <div className="container flex items-center  gap-10 h-[55px]">
                <div className='font-bold text-3xl'><Link to="/">UptoDate</Link></div>
                <nav>
                    <ul className="flex  gap-5 font-medium text-[18px]">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link>Subscribed Posts</Link>
                        </li>
                       
                        <li>
                            <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={dropdownShow} className="inline-flex w-full justify-center"  id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Account
                                <svg className="text-black mt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>

  {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
  <div className={`${isShow? "block" :"hidden"} absolute duration-200 right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <Link onClick={()=>{setIsShow(!isShow)}} to="my-posts" className="block px-4 py-1  text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1" >My Posts</Link>
      <button onClick={handleLogin}  className="block px-4 py-1  text-sm text-gray-700" role="menuitem" tabIndex="-1" id="login">Login</button>
      <button onClick={handleLogin} className="block px-4 py-1 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="logout">Logout</button>
     
    </div>
  </div>
</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar
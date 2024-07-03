
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Homepage from './pages/Homepage'
import SinglePost from './pages/SinglePost'
import MyPosts from './pages/MyPosts'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPost from './pages/AddPost'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>} />
                <Route  path="login" element={<Login/>} />
                <Route  path="register" element={<Register/>} />
                <Route path='my-posts' element={<MyPosts/>} />
                {/* <Route path="new-post" element /> */}
                <Route path='posts/:postId' element={<SinglePost/>} />
                <Route path='add-post' element={<AddPost/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

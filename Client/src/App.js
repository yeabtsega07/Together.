import React , {useContext} from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes } from 'react-router';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage"
import Blog from "./pages/Blog";
import Mypost from "./pages/Mypost";
import Write from "./components/write";
import Post from "./components/Post";
import { Context } from "./context/Context";




function App() {
  const { user } = useContext(Context);
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={  <Homepage />} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path="/signup" element={ user ? <Homepage/> :<SignUp /> } />
        <Route path="/signin" element={user ? <Homepage/> : <SignIn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mypost" element={<Mypost />} />
        <Route path="/write" element={<Write/>} />
        <Route path="/post" element={<Post/>} />
       
      </Routes>
    </div>
    </>
  );
}

export default App;

import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes } from 'react-router';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";




function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
       
      </Routes>
    </div>
    </>
  );
}

export default App;

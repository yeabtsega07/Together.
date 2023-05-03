import React from 'react'
import {AiFillFacebook, AiFillGithub , AiOutlineGoogle} from 'react-icons/ai'

const SignIn = () => {
  return (
      <div className=' w-screen h-screen flex justify-center items-center'>

        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/2 h-4/6 items-center max-w-4xl transition duration-1000 ease-out pt-11">
              <h2 className='p-3 text-3xl font-bold text-[#409ba3] '>TOGETHER.</h2>
              <div className="inline-block border-[1px] justify-center w-20 border-black border-solid"></div>
              <h3 className='text-xl font-semibold text-black pt-2'>Sign In!</h3>
              <div className='flex space-x-2 m-4 items-center justify-center'>
                 <div className="socialIcon">
                 <AiFillFacebook/>
                 </div>
                 <div className="socialIcon">
                 <AiFillGithub/>
                 </div>
                 <div className="socialIcon">
                 <AiOutlineGoogle/>  
                 </div>
              </div>
              {/* Inputs */}
              <div className='flex flex-col items-center justify-center'>
               <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-cyan-500 focus:outline-none focus:ring-0' placeholder='Email'></input>
               <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-cyan-500 focus:outline-none focus:ring-0' placeholder='Password'></input>
               <button className='rounded-2xl m-2 text-white bg-[#255f6bec] w-2/5 px-4 py-2 shadow-md hover:text-[#183a41ec] hover:bg-white transition duration-200 ease-in'>
                 Sign In
               </button>
              </div>
              <div className="inline-block border-[1px] justify-center mt-3 w-20 border-[#16363cec] border-solid"></div>
              <p className='text-[#424141] mt-4 text-sm'>Don't have an account?</p>
              <p className='text-[#424141] mb-4 text-sm font-medium cursor-pointer'>Create a New Account?</p>
           </div>
    </div>
     
  )
}

export default SignIn

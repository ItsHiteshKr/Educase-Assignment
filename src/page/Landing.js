import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col items-center justify-end h-screen bg-gray-100'>
        <div className='bg-gray-150 rounded-lg border border-gray-300 text-black w-[380px] h-full p-5 flex flex-col justify-end'>
            <h1 className='text-2xl font-bold'>Welcome to PopX</h1>
            <p className='text-gray-500 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            
            <div className='flex flex-col gap-4 mt-2 mb-10'>
                <button className='bg-[#6C25FF] text-white font-semibold px-8 py-2 rounded mt-4 hover:bg-purple-600'
                onClick={() => navigate('/signup')}
                    >Create Account</button>
                <button className='bg-[#a97cd77b] text-black font-semibold px-2 py-2 rounded hover:bg-[#9636d1]'
                    onClick={() => navigate('/login')}
                >Already Registered? Login</button>
            </div>
            
        </div>
    </div>
  )
}

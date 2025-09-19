import React from 'react'
import img from '../image/Ellipse 114@2x.png';
import camera from '../image/Group 1585@2x.png';

export default function Profile() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm border h-full max-w-md p-0">
        
        <div className="bg-white p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-700">Account Settings</h1>
        </div>
        
        <div className="bg-gray-100 p-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className="relative">
              <img 
                src={img} 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1">
                <img 
                  src={camera} 
                  alt="Camera" 
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">Marry Doe</h2>
              <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>
        
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
      </div>
    </div>
  )
}
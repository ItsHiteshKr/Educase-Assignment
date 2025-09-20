import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PopXAccountForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Account created successfully!');
    navigate('/profile');
  };
  // Check if required fields are filled
  const isFormValid = formData.fullName.trim() !== '' && formData.phoneNumber.trim() !== '' && formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div style={{width: '380px'}} className="bg-white rounded-lg h-full shadow-sm border p-8 flex flex-col">
        
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Create your PopX<br />Account
        </h1>
        
        <div className="space-y-5 flex-1">
          
          {/* Full Name */}
          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your Full Name"
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg border-0"
            />
          </div>
          
          {/* Phone Number */}
          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your Phone number"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg border-0"
            />
          </div>

          {/* Email */}
          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email address"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg border-0"
            />
          </div>

          {/* Password */}
          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg border-0"
            />
          </div>

          {/* Company Name */}
          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter your Company Name"
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg border-0"
            />
          </div>

          {/* Agency Question */}
          <div>
            <div className="text-base font-medium text-gray-900 mb-3">
              Are you an Agency?
            </div>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2 text-blue-600"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleInputChange}
                  className="mr-2 text-blue-600"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

        </div>

        <div className='mt-auto pt-4'>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              isFormValid 
                ? 'bg-gray-500 hover:bg-gray-600 text-white cursor-pointer' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
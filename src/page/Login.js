import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Login attempt:", formData);
    navigate('/profile');
  };

  // Check entry validity
  const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg border border-gray-300 text-black w-[380px] h-full p-5">
        <div>
          <h1 className="text-3xl font-bold text-black">Signin to your PopX account</h1>
          <p className="text-gray-500 font-semibold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        
        <div className="space-y-6 mt-10">
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
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-base py-1 border-0"
            />
          </div>

          <div className="relative w-full border border-gray-300 rounded-lg px-4 py-2 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <label className="absolute text-xs top-0 left-5 font-semibold -translate-y-1/2 bg-white px-2 text-purple-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-base py-1 border-0"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
              isFormValid 
                ? 'bg-gray-500 hover:bg-gray-600 text-white cursor-pointer' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
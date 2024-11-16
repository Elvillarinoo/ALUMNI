import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className="flex min-h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/path/to/cactus-image.jpg')` }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Adobe</h1>
            <p>Sign in or create an account</p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-1/2 flex items-center justify-center p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-gray-600">Step 1 of 2</p>
          </div>

          {/* Authentication Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
              <GoogleIcon /> Google
            </button>
            <button className="w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
              <FacebookIcon /> Facebook
            </button>
            <button className="w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
              <AppleIcon /> Apple
            </button>
            <button className="w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
              <MicrosoftIcon /> Microsoft
            </button>
            <button className="w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
              <LineIcon /> LINE
            </button>
          </div>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email and Password Form */}
          <form className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Create a password that contains at least 8 characters, upper/lower case letters, and a number or symbol.
              </p>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
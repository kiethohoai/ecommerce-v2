import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

function Register() {
  return (
    <div className="flex min-h-screen min-w-[100vw] items-center justify-center bg-[#cdcae9]">
      <div className="w-[350px] p-2 text-[#ffffff]">
        <div className="rounded-md bg-[#6f68d1] p-4">
          <h2 className="mb-3 text-xl font-bold">Welcome to Ecommerce</h2>
          <p className="mb-3 text-sm font-medium">
            Please register your account
          </p>

          <form>
            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-md border border-slate-400 bg-transparent px-3 py-2 outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                required
              />
            </div>

            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-md border border-slate-400 bg-transparent px-3 py-2 outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address..."
                required
              />
            </div>

            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="rounded-md border border-slate-400 bg-transparent px-3 py-2 outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                required
              />
            </div>

            <div className="mb-3 flex w-full items-center gap-3">
              <input
                className="h-4 w-4 overflow-hidden rounded border-gray-300 bg-gray-200 text-blue-600 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & treams
              </label>
            </div>

            <button className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50">
              Sign up
            </button>

            <div className="mb-3 flex items-center justify-center gap-3">
              <p>
                Already have an account ?{' '}
                <Link to="/login" className="cursor-pointer font-bold">
                  Sign in
                </Link>{' '}
              </p>
            </div>

            <div className="mb-3 flex w-full items-center justify-center">
              <div className="h-[1px] w-[45%] bg-slate-700"></div>
              <div className="flex w-[10%] items-center justify-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="h-[1px] w-[45%] bg-slate-700"></div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="flex h-[35px] w-[135px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50">
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className="flex h-[35px] w-[135px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

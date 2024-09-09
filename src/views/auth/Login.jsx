import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  return (
    <div className="flex min-h-screen min-w-[100vw] items-center justify-center bg-[#cdcae9]">
      <div className="w-[350px] p-2 text-[#ffffff]">
        <div className="rounded-md bg-[#6f68d1] p-4">
          <h2 className="mb-3 text-xl font-bold">Welcome to Ecommerce</h2>
          <p className="mb-3 text-sm font-medium">
            Please sign in to your account
          </p>

          <form>
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

            <button className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50">
              Sign in
            </button>

            <div className="mb-3 flex items-center justify-center gap-3">
              <p>
                Don&apos;t have any account ?{' '}
                <Link to="/register" className="cursor-pointer font-bold">
                  Sign up
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

export default Login;

import React, { useState } from 'react';

function AdminLogin() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🚀🚀🚀  state=', state);
  };

  return (
    <div className="flex min-h-screen min-w-[100vw] items-center justify-center bg-[#cdcae9]">
      <div className="w-[350px] p-2 text-[#ffffff]">
        <div className="rounded-md bg-[#6f68d1] p-4">
          <div className="flex h-[70px] items-center justify-center">
            <div className="h-[50px] w-[180px]">
              <img
                className="h-full w-full"
                src="http://localhost:3000/images/logo.png"
                alt="logo-image"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                value={state.email}
                onChange={handleInput}
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
                value={state.password}
                onChange={handleInput}
                className="rounded-md border border-slate-400 bg-transparent px-3 py-2 outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                required
              />
            </div>

            <button className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

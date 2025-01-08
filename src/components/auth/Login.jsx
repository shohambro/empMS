import React, { useState } from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-red-600 p-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="text-white outline-none bg-transparent border-2 border-red-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            className="text-white outline-none bg-transparent border-2 border-red-600 rounded-full text-xl py-3 px-5 mt-5 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="mt-5 text-white outline-none bg-red-600 border-2 border-red-600 rounded-full text-xl py-3 px-5 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

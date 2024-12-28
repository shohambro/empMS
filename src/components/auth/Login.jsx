import React from 'react'

const Login = () => {
  return (
    <div className= 'flex h-screen w-screen items-center justify-center'>
      <div className= 'rounded-xl border-2 border-red-600 p-20'>
        <form className= 'flex flex-col items-center justify-center'>
          <input className= 'text-black outline-none bg-transparent border-2 border-red-600 rounded-full text-xl py-3 px-5 placeholder:text-white' type="email" placeholder= 'Enter Your Email' />
          <input className= 'text-black outline-none bg-transparent border-2 border-red-600 rounded-full text-xl py-3 px-5 placeholder:text-white' type="password" placeholder= 'Enter Your Password' />
          <button className= 'mt-5 text-white outline-none bg-red-600 border-2 border-red-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

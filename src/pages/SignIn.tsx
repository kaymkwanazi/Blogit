import React from 'react';
import signin from '../images/Sign in-pana.png';
import { Link } from 'react-router-dom';

export const SignIn: React.FC = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl text-center pt-5'>Sign In</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
          <div className=''>
            <img src={signin} alt='signin' className='object-cover w-full h-full' />
          </div>
          <div className='flex items-center justify-center'>
            <form className='w-full max-w-md'>
              <input type='email' placeholder='Email' className='border border-gray-300 p-2 w-full my-4' />
              <input type='password' placeholder='Password' className='border border-gray-300 p-2 w-full my-4' />
              <Link to='/home'>
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md w-full my-5'>Sign In</button>
              </Link>
              <p className='text-center'>Don`t have an account? <Link to='/register'><span className='text-blue-700 underline'>Register here</span></Link> </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
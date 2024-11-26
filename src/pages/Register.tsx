import React from 'react';
import signup from '../images/Sign up-pana.png';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl text-center pt-5'>Register</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 h-11/12'>
          <div className=''>
            <img src={signup} alt='signup' className='object-cover w-full ' />
          </div>
          <div className='flex items-center justify-center'>
            <form className='w-full max-w-md'>
              <input type='text' placeholder='Name' className='border border-gray-300 p-2 w-full my-4' />
              <input type='email' placeholder='Email' className='border border-gray-300 p-2 w-full my-4' />
              <input type='password' placeholder='Password' className='border border-gray-300 p-2 w-full my-4' />
              <input type='password' placeholder='Confirm Password' className='border border-gray-300 p-2 w-full my-4' />
              <button type='submit' className='bg-blue-500 text-white p-2 rounded-md w-full my-5'>Register</button>
              <p className='text-center'>Already registered? <Link to='/signin'><span className='text-blue-700 underline'>Sign in here</span></Link> </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
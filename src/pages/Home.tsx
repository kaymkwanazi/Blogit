import React from 'react';
import { Navbar } from '../components/Navbar';
import { LeftSidebar } from '../components/LeftSidebar';

export const Home: React.FC = () => {
  return (
    <>
    <div className='md:w-8/12 mx-auto'>
      <Navbar />
      <div className='grid cols-1 md:grid-cols-4'>
        <div className=''>
          <LeftSidebar  />
        </div>
        
      </div>
      

    </div>
    </>
  );
};
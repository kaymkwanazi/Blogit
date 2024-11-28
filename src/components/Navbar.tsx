import React from 'react'
import logo from '../images/blogit.webp'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SearchIcon from '@mui/icons-material/Search';
import { Link , useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const pageName = location.pathname.split('/')[1] || 'home';

    // Function to capitalize the first letter as page names are all small letters, instead do not use it 
    function capitalizeFirstLetter(string: string): string {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      const pageTitle = capitalizeFirstLetter(pageName);

    
  return (
    <>
    <div className='grid cols-1 md:grid-cols-4 my-5 justify-center'>
        <div className='mx-auto md:mx-0'>
            <Link to='/home'>
                <img src={logo} alt='logo' className='size-10 rounded-lg ml-8'/>
            </Link>
        </div>
        <div className='col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-slate-900'>{pageTitle}</h1>
                <StarBorderPurple500Icon />
            </div>
        </div>
        <div className='px-0 md:px-6 mx-auto'>
            <SearchIcon className='absolute m-2' />
            <input type='text'  className='bg-blue-200 rounded-full py-2 px-8'/>
        </div>

    </div>
    </>
  )
}

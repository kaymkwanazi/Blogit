/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import pp from '../images/profPic.png'

export const Profile: React.FC = () => {
    // const [currentUser] = useSelector((state) => state.user);
    // const [tweets, setTweets] = useState(null);
    // const [userProfile, setUserProfile] = useState(null);
    // const { userId } = useParams();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const tweets = await axios.get(`tweets/user/all/${userId}`);
    //             const userProfile = await axios.get(`users/${userId}`);

    //             setTweets(tweets);
    //             setUserProfile(userProfile);
                           
    //         } catch(err) {
    //             console.log('error', err);
    //         }
    //     };

    //     fetchData();
    // }, [currentUser, id]);

    return (
    <>
        <Navbar />
        <div className='grid cols-1 md:grid-cols-4'>
            <div className='px-4'>
                <LeftSidebar />
            </div>

        <div className='col-span-2 border-x-2 border-t-slate-800 px-4 bg-slate-200'>
            <div className='bg-slate-900 h-60 relative'>
                <div className='grid grid-cols-3'>
                    <div className='relative flex justify-center items-center my-52'>
                        <div className='border-4 border-slate-200 rounded-full'>
                            <img src={pp} className='size-12 rounded-full'></img>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-start mt-20 ' style={{ marginLeft: '-32px' }}>
                        <p className='font-bold text-2xl'>Username</p>
                        <p className='font-bold'>@username</p>
                    </div> 

                    <div className='flex justify-end items-center mt-20 mr-5'>
                        <button className='bg-blue-500 text-white px-3 py-2 rounded-3xl'>Edit profile</button>
                    </div>
                </div>
            </div>
        </div>

            <div className='px-4'>
                <RightSidebar />
            </div>
    
    
        </div>
        
    </>
    
  )
}

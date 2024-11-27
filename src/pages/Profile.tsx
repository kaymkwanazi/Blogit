/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useParams} from 'react-router-dom'

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
        {/* <Navbar /> */}
        <div className='grid cols-1 md:grid-cols-4'>
            <div className='px-4'>
                <LeftSidebar />
            </div>
            <div className='col-span-2 border-x-2 border-t-slate-800 px-'>
                <div className='bg-slate-900 h-60 relative'>
                    <div className='grid cols-1 md:grid-cols-3'>
                        <div className='absolute border-2 border-slate-200 rounded-full inset-0 flex justify-center items-center size-16 my-52'>
                            <img src='image.png' className='size-10'></img>
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

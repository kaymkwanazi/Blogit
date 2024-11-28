import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'
import {Link} from 'react-router-dom'
import pic from '../images/profPic.png'

export const EditProfile: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [profilePic, setProfilePic] = useState<File | null>(null);

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfilePic(e.target.files[0]);
        }
    };


    const handleSave = async () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('bio', bio);
        formData.append('email', email);
        formData.append('password', password);
        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        try {
            const response = await fetch('https://your-backend-api.com/updateProfile', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful response
                console.log('Profile updated successfully');
            } else {
                // Handle error response
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <>
    <Navbar />
        <div className='grid cols-1 md:grid-cols-4'>
            <div className='px-4'>
                <LeftSidebar />
            </div>
            <div className='col-span-2 border-x-2 border-t-slate-800 px-4'>
                <div className='bg-slate-900 h-60 relative'>
                    <div className='grid grid-cols-3'>
                        <div className='relative flex justify-center items-center my-52'>
                            <div className='border-4 border-slate-200 rounded-full'>
                            <img src={profilePic ? URL.createObjectURL(profilePic) : pic} className='size-12 rounded-full'></img>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-start mt-20 ' style={{ marginLeft: '-32px' }}>
                            <p className='font-bold text-2xl'>Username</p>
                            <p className='font-bold'>@username</p>
                        </div> 

                        <div className='flex justify-end items-center mt-20 mr-5'>
                            <Link to='/profile'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded-3xl' onClick={handleSave}>Save</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Edit form */}
                <div className='mt-32'>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
                                <input
                                    id='username'
                                    type='text'
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                                <input
                                    id='email'
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                                <input
                                    id='password'
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='bio'>Bio</label>
                                <textarea
                                    id='bio'
                                    placeholder='Bio'
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    className='shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='profilePic'>Upload Picture</label>
                                <input
                                    id='profilePic'
                                    type='file'
                                    onChange={handleProfilePicChange}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                    </div>
                </form>
            </div>

            </div>
            <div className='px-4'>
                <RightSidebar />
            </div>
    
    
        </div>
    </>
    
  )
}

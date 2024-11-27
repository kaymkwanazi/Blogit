import React from 'react'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'

export const Profile: React.FC = () => {
    return (
    <div className='grid cols-1 md:grid-cols-4'>
        <div className='px-4'>
            <LeftSidebar />
        </div>
        <div className='col-span-2 border-x-2 border-t-slate-800 px-6'>

        </div>
        <div className='px-4'>
            <RightSidebar />
        </div>

    </div>
  )
}

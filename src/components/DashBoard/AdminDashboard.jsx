import React from 'react'
import Header from '../others/header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'

function AdminDashboard({changeUser, data }) {
    return (
        <div className='bg-[#1c1c1c] flex w-full flex-col items-center justify-center'>
            <div className=' w-full '>
                <Header changeUser={changeUser} data={data} />
            </div>
            <div className='pt-5'>
                    <CreateTask data={data} />
                </div>
            <div className='w-[95%]'>
                    <AllTask data={data}/>
            </div>
        </div>
    )
}

export default AdminDashboard
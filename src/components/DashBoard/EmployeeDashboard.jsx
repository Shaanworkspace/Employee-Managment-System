import React from 'react'
import Header from '../others/header.jsx'
import TaskBox from '../others/TaskBox.jsx'
import TaskList from '../../TaskList/TaskList.jsx'

function EmployeeDashboard({changeUser, data }) {
    return (
        <div  className='bg-[#1c1c1c] w-screen h-screen'>
            <Header  changeUser={changeUser} data={data}/> 
            <div className='bg-[#1c1c1c] flex flex-col justify-center items-center'>              
                <TaskBox  data={data}/>
                <TaskList  data={data}/>
            </div>
        </div>
    )
}

export default EmployeeDashboard
import React from 'react'
import TaskNumberRepresenter from './TaskNumberRepresenter.jsx'

function TaskBox({data}) {
	return (
		<div className='flex flex-col  w-[95%] gap-3 items-center justify-center mt-1'>
				<div className='flex gap-3'>
					<TaskNumberRepresenter  data={data}/>
				</div>
		</div>
	)
}

export default TaskBox
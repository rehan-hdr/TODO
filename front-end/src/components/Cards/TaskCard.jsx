import React from 'react'
import { MdCreate, MdDelete, MdCheckBox } from 'react-icons/md'

const TaskCard = ({
    title,
    description,
    completed,
    date,
    onEdit,
    onDelete
}) => {
  return (
    <div className='border rounded my-4 p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className='flex items-center'>
            <div>
                <h6 className='text-md text-medium'>{title}</h6>
                <span className='text-xs text-slate-500'>{date}</span>
            </div>

        </div>
        <p className='text-sm text-slate-600'>{description?.slice(0,60)}</p>


        <div className='flex items-center justify-between'>
            
            <label className='flex flex-col'>
                <h2 className='text-xs my-2'>Completed?</h2>
                <input className='hover:cursor-pointer accent-lime-600' type='checkbox' id='completed' name='completed' value={completed} />
            </label>


            <div className='flex items-center gap-2'>
                <MdCreate 
                className='icon-btn hover:text-green-600'
                onClick={(onEdit)} 
                />
                <MdDelete
                className='icon-btn hover:text-red-500'
                onClick={(onDelete)} 
                />
            </div>
        </div>
    </div>
  )
}

export default TaskCard
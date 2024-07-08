import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const AddEditTask = ({taskData, type, onClose}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState(null);

    const addNewNote = async () => {}

    const editNote = async () => {}

    const handleAddNote = () => {
        if(!title){
            setError('Enter a title');
            return;
        }
        if(!description){
            setError('Enter a description')
            return;
        }
        
        setError('');

        if (type === 'edit'){
            MdEditNote();
        }
        else{
            addNewNote();
        }
        


        
    }


  return (
    <div className='relative'>

        <button
            className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50'
            onClick = {onClose}
        >
            <MdClose className='text-xl text-slate-400' />
        </button>

        <div className='flex flex-col gap-2'>
            <label className='input-label'>TITLE</label>
            <input
            type='text'
            className='text-2xl text-slate-950'
            placeholder='Push/Pull/Legs'
            value = {title}
            onChange = {({target}) => setTitle(target.value)}

            />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>Description</label>
            <textarea
                type='text'
                className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                placeholder='Enter details here bruh'
                rows={10}
                value = {description}
                onChange = {({target}) => setDescription(target.value)}
                />
        </div>

        {error && <p className='text-red-500 tet-xs pt-4'>{error}</p>}


        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
            ADD
        </button>
    </div>
  )
}

export default AddEditTask
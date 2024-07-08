import React from 'react'

const AddEditTask = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-labe'>TITLE</label>
            <input
            type='text'
            className='text-2xl text-slate-950'
            placeholder='Push/Pull/Legs'

            />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>Description</label>
            <textarea
                type='text'
                className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                placeholder='Enter details here bruh'
                rows={10}
                />
        </div>
        <button className='btn-primary font-medium mt-5 p-3' onClick={() => {}}>
            ADD
        </button>
    </div>
  )
}

export default AddEditTask
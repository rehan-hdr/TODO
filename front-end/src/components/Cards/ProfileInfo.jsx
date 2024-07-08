import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {


    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login');
    }

  return(

    <div className='flex items-center gap-3'>

        <div className='w-50 h-12 flex items-center justify-center rounded text-slate-950 font-medium bg-slate-100 px-2'>username</div>

        <div>
            <button className='text-md text-slate-700 underline' onClick={onLogout}>
                Logout
            </button>
        </div>



    </div>

  )
}

export default ProfileInfo
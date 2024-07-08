import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import TaskCard from '../components/Cards/TaskCard'
import { MdAdd } from 'react-icons/md'
import AddEditTask from '../components/AddEditTask'
import Modal from 'react-modal'

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });
  return (
  <>
      <Navbar />

      <div className='container mx-auto  max-w-screen-lg'>
        <div className='w-2/3 mx-auto'>
          <TaskCard  
            title='hello' 
            description='yuah'
            date='25 Auguster'
            completed={false}
            onEdit={()=>{}}
            onDelete={()=>{}}/>
                      <TaskCard  
            title='hello' 
            description='yuah'
            date='25 Auguster'
            completed={false}
            onEdit={()=>{}}
            onDelete={()=>{}}/>
                      <TaskCard  
            title='hello' 
            description='yuah'
            date='25 Auguster'
            completed={false}
            onEdit={()=>{}}
            onDelete={()=>{}}/>
          </div>
      </div>
      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
      
      onClick={() => {
        setOpenAddEditModal({isShown:true, type:'add', data:null})
      }}>
        <MdAdd className='text-[32px] text-white' /> 
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{
        }}
        style={{
          overlay:{
            backgroundColor: 'rgba(0,0,0,0.2)',
          }
        }}
        contentLabel=''
        className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5'
        >
                <AddEditTask />
        </Modal>





   </>
   )
   }

export default Home
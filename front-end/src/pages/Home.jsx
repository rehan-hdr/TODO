import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TaskCard from '../components/Cards/TaskCard'
import { MdAdd } from 'react-icons/md'
import AddEditTask from '../components/AddEditTask'
import moment from "moment"
import Modal from 'react-modal'
import axiosInstance from '../utils/axiosInstance'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {

  // const [userInfo, setUserInfo]= useState(null);

  const [allTasks, setAllTasks] = useState([])

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });

  const navigate = useNavigate();

  // // get User Info
  // const getUserInfo = async () => {
  //   try{
  //     const response = await axiosInstance.get('/api/users/current');
  //     if (response.data && response.data.user){
  //       setUserInfo(response.data.user);
  //       console.log(response.data.user);
  //     }
  //   }
  //   catch(error){
  //     if(error.response.status === 401){
  //       localStorage.clear();
  //       navigate('/login')
  //     }
  //   }
  // };



    // get all tasks api

    const getTasks = async() => {
      try {
        const response = await axiosInstance.get('/api/tasks/getTasks');

        if (response.data && response.data.tasks) {
          setAllTasks(response.data.tasks);
        }
      }
      catch(error){
        console.log(error.message);
      }

    };

  useEffect(() => {
    // getUserInfo();
    getTasks();
    return() => {}
  }, []);

  return (
  <>
      <Navbar/>

      <div className='container mx-auto  max-w-screen-lg'>
        <div className='w-2/3 mx-auto'>
        {allTasks.map((item, index) => (
          <TaskCard key={item._id}
                        title={item.title} 
                        description={item.description}
                        date={moment(item.createdOn).format('')}
                        completed={item.completeds}
                        onEdit={()=>{}}
                        onDelete={()=>{}}/>
        ))}


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

        <AddEditTask 

        type={openAddEditModal.type}
        taskData={openAddEditModal.data}

          onClose={() => {
            setOpenAddEditModal ({isShown:false, type:'add', data:null})
          }}
        
        />
        </Modal>





   </>
   )
   }

export default Home
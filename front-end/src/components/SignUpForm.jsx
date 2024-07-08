import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { validateUsername } from '../utils/validation';
import axiosInstance from '../utils/axiosInstance';

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!validateUsername(username)) {
            setError('Invalid username! username must have only letters, numbers and underscore(_) and atleast 3 characters');
            return;
        }
        if (!password) {
            setError('Invalid! Enter a password');
            return;
        }
        else{
            setError(null)
        }

        // signup api
        try {
            const response = await axiosInstance.post('/api/users/register',{
                 username: username,
                 password: password
            });
    
            if (response.data && response.data.error){
                setError(response.data.message)
                return
            }
            else{
                navigate('/login');
            }

            }
            catch(error){
                if(error.response && error.response.data && error.response.data.message){
                    setError(error.response.data.message);
                }
                else{
                    setError('An unexpected error has occured');
                }
        }

    };
    

 
        

    const handleUsernameChange = (e) => {
        if (!validateUsername(e.target.value)) {
            setError('Invalid username! username must have only letters, numbers and underscore(_) and atleast 3 characters');
            setUsername(e.target.value);
        }
        else{
            setError('')
            setUsername(e.target.value);
        }
    }

  return (
    <div className='flex items-center justify-center mt-28'>
    
        <div className='w-96 border rounded bg-white px-7 py-12'>
            <form onSubmit={handleSignUp}>
                <h4 className='text-2xl mb-7'>Sign Up</h4>

                <input 
                    type="text" 
                    placeholder='username' 
                    className='input-box' 
                    value={username}
                    onChange = {handleUsernameChange}
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    className='input-box'
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />

                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

                <button type='submit' className='btn-primary'>
                    Create your Account
                </button>

                <p className='text-sm text-center mt-4'>
                    Already have an account?{' '}
                    <Link to='/login' className='font-bold text-primary underline'>
                        Login here
                    </Link>
                </p>

            </form>
        </div>
    </div>
  )
}

export default SignUpForm
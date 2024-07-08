import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateUsername } from '../utils/validation';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateUsername(username)) {
            setError('Invalid username! username can have only letters, numbers and underscore(_)');
            return;
        }
        else{
            setError(null)
        }
    }

    const handleUsernameChange = (e) => {
        if (!validateUsername(e.target.value)) {
            setError('Invalid username! username can have only letters, numbers and underscore(_)');
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
            <form onSubmit={handleLogin}>
                <h4 className='text-2xl mb-7'>Login</h4>

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
                    Login
                </button>

                <p className='text-sm text-center mt-4'>
                    Don't have an account?{' '}
                    <Link to='/signup' className='font-bold text-primary underline'>
                        Sign Up here
                    </Link>
                </p>

            </form>
        </div>
    </div>
  )
}

export default LoginForm
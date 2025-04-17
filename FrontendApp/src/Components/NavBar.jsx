import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../ContextAPI/ContextProvider'

const NavBar = () => {
    const {user} = useAuth()
  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between items-center'>
        <div className='text-xl font-bold'>
            <Link to ="/">NoteApp</Link>
        </div>
        <input type="text" placeholder='Serach Notes' className='bg-gray-900 px-4 py-2 rounded'/>
        <div>
            <span className='mr-4'> User Nmae</span>
            <Link to ="/login" className='bg-blue-500 px-4 py-2 rounded mr-4'> Login</Link>
            <Link to ="/login" className='bg-blue-500 px-4 py-2 rounded mr-4'> Singup</Link>

            <button  className='bg-red-500 px-4 py-2 rounded'> LogOut</button>
        </div>

    </nav>
  )
}

export default NavBar
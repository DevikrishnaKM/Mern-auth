import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='bg-slate-900'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-white'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='text-white'> Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-white'>About</li>
          </Link>
          <Link to='/profile'>
          {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li className='text-white'>Sign In</li>
            )}
          </Link>
          
        </ul>
        </div>
    </div>
  )
}

export default Header

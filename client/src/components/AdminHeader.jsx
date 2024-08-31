import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div className="bg-slate-400 dark:bg-slate-800">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-slate-700">User Management App</h1>
        </Link>
        </div>
      
    </div>
  )
}

export default AdminHeader

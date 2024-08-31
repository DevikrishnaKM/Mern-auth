import React, { useState } from 'react'
import AdminHeader from '../../components/AdminHeader'

const Login = () => {

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
        console.log(formData);
    }



  return (
    <>
    <AdminHeader/>
    <div className="p-3 max-w-md mx-auto ">
    <h1 className="text-3xl text-slate-700 text-center font-semibold my-14 ">
        Admin Sign In
    </h1>
    <form className="flex flex-col gap-4 ">
    <input
          type="string"
          placeholder="Name"
          id="name"
          className="bg-slate-100 p-3 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg my-2"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-85 disabled:opacity-80 max-w-lg p-2  my-2">
          Sign In
        </button>
    </form>
    </div>
    </>
  )
}

export default Login

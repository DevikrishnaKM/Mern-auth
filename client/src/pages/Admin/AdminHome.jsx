import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const AdminHome = () => {
  return (
    <div>
      <AdminHeader />
      <div className="h-screen overflow-hidden">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-slate-700 mt-10">
            Users
          </h1> 
          <div className="flex justify-between mb-4">
            <Link to='/admin/addUser'>
            <button className="flex justify-between  bg-slate-700 text-white rounded-lg uppercase hover:opacity-85 disabled:opacity-80 max-w-xl px-8 py-2 my-2">
              Add User
            </button>
            </Link>
            <input
              className="border border-gray-300 p-1 "
              type="search"
              placeholder="Search by User Name"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <table className="w-full border-collapse border border-gray-300 bg-white">
            <thead className="bg-slate-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Profile</th>
                <th className="border border-gray-300 px-4 py-2">User Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            {/* <tbody>
              {search == ""
                ? users.map((user, index) => (
                    <tr key={user._id}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <img
                          className="h-10 rounded-lg"
                          src={user.profilePicture}
                          alt=""
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.username}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleEdit(user._id)}
                          className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-1 px-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : filteredUsers.map((user, index) => (
                    <tr key={user._id}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <img
                          className="h-24 rounded-lg"
                          src={`${user.profilePicture}`}
                          alt=""
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.username}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleEdit(user._id)}
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody> */}
          </table>
      </div>
      </div>
    </div>
  )
}

export default AdminHome

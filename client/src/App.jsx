import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Admin/Login'

const App = () => {
  return (
    <BrowserRouter>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>

    <Routes>
      <Route path="/admin" element={<Login />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App

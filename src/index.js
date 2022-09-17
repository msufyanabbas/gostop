import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Register from './pages/register/Register'
import Home from './pages/home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </Router>
)

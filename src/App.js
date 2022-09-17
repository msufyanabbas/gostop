import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './app.css'
import Home from './pages/home/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import Manage from './pages/manage/Manage'
import NewUser from './pages/newUser/NewUser'
// import DropDown from './components/UserDropdown/DropDown'
import Strategies from './pages/strategies/Strategies'
import Detection from './pages/detection/Detection'
import Signs from './pages/signs/Signs'
import NewJunction from './pages/newJunction/NewJunction'
import JunctionList from './pages/junctionList/JunctionList'
import Reporting from './pages/reporting/Reporting'
import Prioritization from './pages/prioritization/Prioritization'
import PollList from './pages/pollList/PollList'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/settings' element={<User />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/newJunction' element={<NewJunction />} />
          <Route path='/junctions' element={<JunctionList />} />
          <Route path='/polls' element={<PollList />} />
          <Route path='/reporting' element={<Reporting />} />
          <Route path='/signs' element={<Signs />} />
          <Route path='/strategies' element={<Strategies />} />
          <Route path='/detection' element={<Detection />} />
          <Route path='/prioritization' element={<Prioritization />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

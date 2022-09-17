import './Sidebar.css'
import {
  Timeline,
  PersonOutline,
  DynamicFeed,
  ChatBubbleOutline,
  BusinessCenter,
  ListAlt,
  Home,
  LocationOn,
  Settings,
  Report,
  Assessment,
  DragIndicator,
  EmojiObjects,
  ControlCamera,
  LowPriority,
  SettingsApplications,
  PolymerOutlined,
  DeviceHub,
  Traffic,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMen'>
          <h1 className='sidebarTitle'>Dashboard</h1>
          <ul className='sidebarList'>
            <Link to='/reporting' className='link'>
              <li className='sidebarListItem active'>
                <Assessment className='sidebarIcon' />
                Reporting
              </li>
            </Link>
            <Link to='/strategies' className='link'>
              <li className='sidebarListItem'>
                <EmojiObjects className='sidebarIcon' />
                Strategies
              </li>
            </Link>
            <Link to='/detection' className='link'>
              <li className='sidebarListItem'>
                <ControlCamera className='sidebarIcon' />
                Detection
              </li>
            </Link>
            <Link to='/prioritization' className='link'>
              <li className='sidebarListItem'>
                <LowPriority className='sidebarIcon' />
                Prioritization
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMen'>
          <ul className='sidebarList'>
            <h1 className='sidebarTitle'>User Management</h1>
            <Link to='/users' className='link'>
              <li className='sidebarListItem '>
                <PersonOutline className='sidebarIcon' />
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMen'>
          <h1 className='sidebarTitle'>Junction Management</h1>
          <ul className='sidebarList'>
            <Link to='/junctions' className='link'>
              <li className='sidebarListItem'>
                <DeviceHub className='sidebarIcon' />
                Junctions
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMen'>
          <h1 className='sidebarTitle'>Poll Management</h1>
          <ul className='sidebarList'>
            <Link to='/polls' className='link'>
              <li className='sidebarListItem'>
                <Traffic className='sidebarIcon' />
                Polls
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMen'>
          <h1 className='sidebarTitle'>Configurations</h1>
          <ul className='sidebarList'>
            <Link to='/settings' className='link'>
              <li className='sidebarListItem'>
                <Settings className='sidebarIcon' />
                Settings
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

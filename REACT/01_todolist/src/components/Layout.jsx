import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Usercontext from '../contexts/usercontext'
import { useState } from 'react'
import SidebarOpenCloseContext from '../contexts/sidebarcontext.js'

function Layout() {
  const [sidebarOpen, openCloseSidebar] = useState(true);
  const [username, setusername] = useState('Robot');

  return (
    <div>
      <Usercontext value={{username, setusername}}>
      <SidebarOpenCloseContext value = {{sidebarOpen, openCloseSidebar}}>
        <Header />
        <Sidebar/>
        <Outlet />
      </SidebarOpenCloseContext>
      </Usercontext>
    </div>
  )
}

export default Layout
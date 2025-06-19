import { useState } from 'react'
import React, { useContext } from 'react'
import FullScreen from './Full_screen.jsx'
import SidebarOpenCloseContext from '../contexts/sidebarcontext.js'
import { useFormState } from 'react-dom';
import Usercontext from '../contexts/usercontext.js';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function Today() {
  
  return (
    <div>
      <FullScreen/>
    </div>
  )
}

export default Today  
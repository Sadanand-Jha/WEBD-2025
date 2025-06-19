import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Today from './components/Today_page.jsx'
import Upcoming from './components/Upcoming_page.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Inbox from './components/Inbox_page.jsx'
import Completed from './components/Completed_page.jsx'
import Filter from './components/Filter_page.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element= {<Layout/>}>
            <Route path='' element= {<Today/>} />
            <Route path='today' element={<Today/>} />
            <Route path='upcoming' element= {<Upcoming/>}/>
            <Route path='inbox' element= {<Inbox/>}/>
            <Route path='completed' element={<Completed/>}/>
            <Route path='filter' element={<Filter/>}/>
        </Route>
    ))
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

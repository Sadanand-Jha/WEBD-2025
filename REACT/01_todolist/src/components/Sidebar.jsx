import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { GrInbox } from "react-icons/gr";
import { CiCircleCheck } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import './sidebar.css'
import { CiBellOn } from "react-icons/ci";
import { BsLayoutTextSidebar } from "react-icons/bs";
import SidebarOpenCloseContext from '../contexts/sidebarcontext';
import Usercontext from '../contexts/usercontext';
import { LuListTodo } from "react-icons/lu";
import { BsInbox } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import {  NavLink } from "react-router-dom"




function Sidebar() {
    const {username} = useContext(Usercontext);   
    const {sidebarOpen, openCloseSidebar} = useContext(SidebarOpenCloseContext)
    function sidebarOpenClose (){
        openCloseSidebar((prev) => !prev);
    }
  return (
    <div>    
        <div className={`openbutton ${sidebarOpen ? 'hidden': ''} inline`} >
            <button type="button"
            style={{paddingTop: '10px'}}
            onClick={sidebarOpenClose}>
                <BsLayoutTextSidebar className='sidebar_icons'/>
            </button>
        </div>
        <div className={`sidebar_animation ${sidebarOpen ? 'open' : 'closed'}`} style={{ width: '250px', padding: '10px',paddingLeft: '10px', height: '100lvh'}}>
            <div className="navbar flex justify-between">
                <div className='inline'>
                    {username}
                </div>
                <div>
                    <CiBellOn style={{scale: '1.5'}} className='sidebar_icons'/>
                    <button 
                    onClick={sidebarOpenClose}>
                        <BsLayoutTextSidebar className='sidebar_icons'/>
                    </button>
                </div>
            </div>

            <div className='optionbox flex flex-col justify-between' style={{height: '90lvh'}}>
                <div className='up mt-5'>
                
                    <NavLink to={'/'} >
                    {({isActive}) => (
                                <div className={`sidebar_option ${isActive ? "bg-pink-200 font-bold rounded" : ""}`}>
                                    <LuListTodo className='sidebar_icons'/>
                                    Today
                                </div>)}
                    </NavLink>
                    <NavLink  to={'/inbox'}>
                        {({isActive}) => (
                                <div className={`sidebar_option ${isActive ? "bg-pink-200 font-semibold rounded" : ""}`}>
                                    <BsInbox className='sidebar_icons'/>
                                    Inbox
                                </div>
                        )}
                    </NavLink>
                    <NavLink to={'/upcoming'}>
                        {({isActive}) => (
                                <div className={`sidebar_option ${isActive ? "bg-pink-200 font-semibold rounded" : ""}`}>
                                    <SlCalender className='sidebar_icons'/>
                                    Upcomings
                                </div>
                        )}
                    </NavLink>
                    <NavLink to={'/filter'} >
                        {
                            ({isActive}) => (
                                <div className={`sidebar_option ${isActive ? "bg-pink-200 font-semibold rounded" : ""}`}>
                                    <CiFilter className='sidebar_icons'/>
                                    Filter
                                </div>
                            )
                        }
                    </NavLink>
                    <NavLink to="/completed">
                    {({ isActive }) => (
                        <div className={`sidebar_option ${isActive ? "bg-pink-200 font-semibold rounded" : ""}`}>
                        <CiCircleCheck className="sidebar_icons" />
                        Completed
                        </div>
                    )}
                    </NavLink>
                </div>
                <div className="down">
                    <NavLink to={'/logout'}>
                        <div>
                            <SlLogout className='sidebar_icons'/>
                            Logout                            
                    </div>
                    </NavLink>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar
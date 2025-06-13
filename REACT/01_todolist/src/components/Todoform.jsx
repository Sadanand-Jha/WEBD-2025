import React from 'react'
import { useTodo } from '../contexts/todocontext';
import { useState } from 'react';

function Todoform() {
    const [task, Settask] = useState("");
    const {addtodo} = useTodo();
    
    const add = (e) => {
        // console.log('helloworld')
        e.preventDefault();
        if(!task) return;
        console.log(task);
        addtodo({task, completed: false});
        Settask("");    
    }

    return (
    <div className='flex justify-center w-full'>
        <form onSubmit={add} className='w-full flex justify-center'>
            <input type="text" 
            placeholder='Write a Todo!'
            className='w-1/2 p-3 m-10 rounded-md '
            style={{backgroundColor: '#FF9149'}}
            value = {task}
            maxLength={10}
            max={10}
            onChange={(e) => Settask(e.target.value)}/>
            <button type='submit'
            style={{backgroundColor:'#60B5FF'}}
            className='cursor-pointer text-white p-3 mb-10 mt-10 font-bold rounded-sm'
            >Submit!</button>
        </form>
    </div>
  )
}

export default Todoform
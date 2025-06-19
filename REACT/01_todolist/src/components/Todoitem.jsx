import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useTodo } from '../contexts/todocontext';
import { IoSaveOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function Todoitem({todo}) {
    console.log(todo.task, 1234);
    const [isEditable, setIsEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.task);
    console.log(todoMsg, 1233424);
    const {updatetodo, togglecomplete, removetodo} = useTodo();


    const togglecompleted = () => {
        togglecomplete(todo.id);
    }

    const edittodo = () => {
        setIsEditable(false);
        console.log(`update is called for ${todoMsg}`);
        updatetodo(todo.id, todoMsg);
    }


    return (
    <div className='flex justify-center'>
        <input type="checkbox"
        className='w-6 h-6 p-3 m-6 mr-2 cursor-pointer'
        checked = {todo.completed}
        onChange={togglecompleted}
        />

        <input type="text" 
        className={`${todo.completed ? 'line-through': 'none' } ${ isEditable ? `border-4`: `border-2`}  p-3 rounded-sm w-1/2 bg-pink-100 m-2`}
        value={todoMsg}
        maxLength={10}
        onChange={(e) => {
            setTodoMsg(e.target.value);
        }}
        
        readOnly = {!isEditable}
        />

        <button className='cursor-pointer bg-blue-700 text-black p-3 m-3 rounded-sm w-15 flex justify-center'
        onClick={() => {
            if(todo.completed) return;
            if(isEditable) edittodo();
            else{
                setIsEditable((prev) => !prev);
            }
        }}
        style={{backgroundColor: '#AFDDFF'}}
        disabled={todo.completed}
        >{isEditable? <IoSaveOutline style={{scale:'1.5'}}/>: <MdEdit style={{scale:'1.5'}}/>}</button>

        <button className='cursor-pointer bg-red-500 text-white rounded-sm pt-3 m-3 font-bold w-15 flex justify-center'
        onClick={() => {
            removetodo(todo.id);        
        }}
        > <MdDelete style={{scale:'1.6'}}/>
        </button>
    </div>
  )
}

export default Todoitem
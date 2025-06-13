import React, { useContext } from 'react'
import { createContext } from 'react'

const Todocontext = createContext({
    Todos: {
        id: Date.now(),
        task: 'washing clothes', 
        completed: false
    }, 
    addtodo: (task) => {},
    removetodo: (id) => {},
    updatetodo: (id, task) => {},
    togglecomplete: () => {}
})
export default Todocontext

export const useTodo = () => {
    return useContext(Todocontext);
}
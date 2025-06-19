import { useContext, useEffect, useState } from 'react'
import { useTodo } from '../contexts/todocontext.js'
import Todocontext from '../contexts/todocontext'
import {Todoitem, Todoform} from '../components/index.js'
import Sidebar from '../components/Sidebar.jsx'
import SidebarOpenCloseContext from '../contexts/sidebarcontext.js'


function FullScreen() {

  const [Todos, setTodos] = useState([]);
  const {sidebarOpen} = useContext(SidebarOpenCloseContext)
  
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todolist'))
    if(todo && todo.length > 0){
      setTodos(todo);
    }
  }, [])

  useEffect(() => {    
    localStorage.setItem('todolist',JSON.stringify(Todos));
  },[Todos]);

  const addtodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
    
  }
  const updatetodo = (id, task) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, task: task} : todo ))
  }
  const removetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const togglecomplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }

  return (
    <div>
      <Todocontext value={{addtodo, updatetodo, removetodo, Todos, togglecomplete}} >
        <div>
            <Todoform/>
            {
                Todos.map((todo) => (
                <div key={todo.id}>
                    <Todoitem todo = {todo}/>
                </div>
                ))
            }    
        </div>
    </Todocontext>
      
    </div>
  )
}

export default FullScreen

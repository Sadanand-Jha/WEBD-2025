import { useEffect, useState } from 'react'
import { useTodo } from './contexts/todocontext'
import Todocontext from './contexts/todocontext'
import './App.css'
import {Todoitem, Todoform} from './components/index.js'


function App() {

  const [Todos, setTodos] = useState([]);
  
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
    
    console.log(Todos, `in_app`);   
  }
  const updatetodo = (id, task) => {
    console.log(task);
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, task: task} : todo ))
  }
  const removetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const togglecomplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }

  return (
    <div style={{backgroundColor:'#CAE8BD'}} className='h-full'>
      <Todocontext value={{addtodo, updatetodo, removetodo, Todos, togglecomplete}} >
      <Todoform/>
      {
        Todos.map((todo) => (
          <div key={todo.id}>
            <Todoitem todo = {todo}/>
          </div>
        ))
      }    
    </Todocontext>
    </div>
  )
}

export default App

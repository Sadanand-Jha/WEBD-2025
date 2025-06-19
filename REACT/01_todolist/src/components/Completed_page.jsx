import React, { useContext } from 'react'
import Todoform from './Todoform'
import Todocontext from '../contexts/todocontext'

function Completed() {
  const {Todos} = useContext(Todocontext)
  return (
    <div>
    </div>
  )
}

export default Completed
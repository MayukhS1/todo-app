import React, {useContext} from 'react'
import { TaskContext } from '../contexts/TaskContext'

const NavBar = () => {
    const {taskList} = useContext(TaskContext);
  return (
    <div className='navbar'>
        <h1>To-do</h1>
        <p>Currently you have {taskList.length} tasks to complete...</p>
    </div>
  )
}

export default NavBar
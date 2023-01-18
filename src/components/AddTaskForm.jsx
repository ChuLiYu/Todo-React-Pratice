import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask, setNewTask } from '../store/slice/todoSlice'


export default function AddTaskForm() {
    const dispatch = useDispatch()
    const newTask = useSelector(state => state.todo.newTask)

    return (
        <>
            <div className='add-task'>
                <input type="text" className='task__title' value={newTask} onChange={e => dispatch(setNewTask(e.target.value))} placeholder="Title here" />
                <button type="submit" className='task__submit' onClick={() => dispatch(addTask(newTask))} accessKey='\n'>+</button >
            </div>
        </>
    )
}
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask, setNewTask, selectNewTask } from '../store/slice/todoSlice'


export default function AddTaskForm() {
    const dispatch = useDispatch()

    const newTask = useSelector(state=>state.todo.value)

    return (
        <>
            <div className='add-task'>
                <input type="textarea" className='task__title' value={newTask} onChange={e => dispatch(setNewTask(e.target.value))} />
                <button type="submit" className='task__submit' onClick={() => dispatch(addTask(newTask))} accessKey='\n'>+</button >
            </div>
        </>
    )
}
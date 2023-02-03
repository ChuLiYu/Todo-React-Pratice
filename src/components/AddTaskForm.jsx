import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask, setNewTask } from '../store/slice/todoSlice'


export default function AddTaskForm() {
    const dispatch = useDispatch()
    const newTask = useSelector(state => state.todo.newTask)

    return (
        <>
            <div className='add-task'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                    <TextField id="outlined-basic" label="Task" variant="outlined"
                        className='task__title' value={newTask} onChange={e => dispatch(setNewTask(e.target.value))} placeholder="Title here"
                        classes={{ root: classes.root }} />

                    <Button variant="contained" color="primary" type="submit" className='task__submit' onClick={() => dispatch(addTask(newTask))} accessKey='\n'
                        style={{ height: '60px' }}>+</Button >
                </div>
            </div>
        </>
    )
}
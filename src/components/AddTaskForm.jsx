import React, { useState } from 'react'

export default function AddTaskForm({ addTask, newTask, setNewTask }) {
    return (
        <>
            <div className='add-task'>
                <input type="textarea" className='task__title' value={newTask} onChange={e => { setNewTask(e.target.value) }} />
                <button type="submit" className='task__submit' onClick={addTask} accessKey='\n'>+</button >
            </div>
        </>
    )
}
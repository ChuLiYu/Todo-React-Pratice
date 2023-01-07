import React from 'react'



export default function AddTaskForm() {
    return (<div className='add-task'>
        <input type="textarea" className='task__title' id='task__title__id' />
        <button type="submit" className='task__submit' onClick={addTaskHandler} accessKey='\n'> + </button>
    </div>);
}
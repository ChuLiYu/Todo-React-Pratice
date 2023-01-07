import { useState } from 'react'
import './App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function App() {



  const [tasks, setTasks] = useState([
    { "id": 1, "title": "Task1", "isCompleted": false },
    { "id": 2, "title": "Task2", "isCompleted": false }
  ])

  // Temp state
  const [updateData, setUpdateData] = useState('')


  //Add new task
  function addTaskHandler() {
    const taskTitle = document.getElementById('task__title__id').value
    console.log(taskTitle);
    if (taskTitle) {
      let num = tasks.length + 1
      setTasks([...tasks, { id: num, title: taskTitle, isCompleted: false }])
    }
  }

  // //Delete specific task
  function deleteTaskHandler(id) {
    let afterDeleteTasks = tasks.filter(task => task.id !== id)
    setTasks(afterDeleteTasks)
  }

  // // Change Task title
  const changeTask = (text) => {
    let revisedTask = {
      id: updateData.id,
      title: text,
      isCompleted: updateData.isCompleted
    }
    setUpdateData(revisedTask)
  }

  //Update Task
  const updateTask = () => {
    let otherTasks = [...tasks].filter(task => task.id !== updateData.id)
    let revisedTasks = [...otherTasks, updateData]
    setTasks(revisedTasks)
    setUpdateData('')
  }

  // //Mark Task completed
  const markTaskDone = (id) => {
    let tasksMarkedDone = tasks.map(task => {
      if (task.id === id) {
        return ({ ...task, isCompleted: !task.isCompleted })
      }
      return task
    })
    setTasks(tasksMarkedDone)

  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  return (
    <div className="App">
      <div className='todo__wrapper'>
        <span><h1>Todo List</h1></span>
        {updateData && updateData ? (
          <EditTaskForm changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate}></EditTaskForm>
        ) : (
          <>
            <div className='add-task'>
              <input type="textarea" className='task__title' id='task__title__id' />
              <button type="submit" className='task__submit'
                onClick={addTaskHandler} accessKey='\n'> + </button>
            </div>
          </>
        )}



        <div className="tasks__list" id='tasks__list__id'>
          ``
          {/* update Data */}
          {tasks && tasks.length ? '' : 'No Tasks'}

          {/* To do Tasks */}
          {tasks && tasks
            .sort((a, b) => a.id > b.id ? -1 : 1)
            .map((task, index) => {
              return (<>
                <li key={task.id} className='task__item'>
                  <span> {index + 1}.</span>
                  <span>{task.title}</span>
                  {
                    task.isCompleted ? null :
                      <EditIcon className='edit__Button' type='button' value='Edit'
                        onClick={() => {
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            isCompleted: task.isCompleted
                          })
                        }} />
                  }
                  <CheckCircleIcon type='button' className='finish__button' value='Finish' onClick={() => markTaskDone(task.id)} />

                  <DeleteIcon className='delete__Button' type='button' value='Delete' onClick={() => deleteTaskHandler(task.id)} color='error' />


                </li>
              </>
              )
            }
            )}
        </div>

      </div>
    </div>
  )
}
export default App

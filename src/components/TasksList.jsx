import { useDispatch } from "react-redux"
import { deleteTask, markTaskDone, setUpdateData } from "../store/slice/todoSlice";

const TasksList = ({ tasks, title }) => {

  const dispatch = useDispatch()

  return (
    <div className="tasks__list" id='tasks__list__id'>
      <h1>{title}</h1>

      {/* update Data */}
      {tasks && tasks.length ? '' : 'No Tasks'}

      {/* To do Tasks */}
      {tasks && tasks.slice()
        .sort((a, b) => a.id > b.id ? -1 : 1)
        .map((task, index) => {
          return (<>
            <li key={task.id} className='task__item'>
              <span> {index + 1}.</span>
              <span>{task.title}</span>
              {
                task.isCompleted ? null :
                  <input className='edit__Button' type='button' value='Edit'
                    onClick={() => dispatch(setUpdateData({
                      "id": task.id,
                      "title": task.title,
                      "isCompleted": task.isCompleted ? true : false,
                      "description": task.description
                    }))
                    } />
              }
              <input type='button' className='finish__button' value='Finish' onClick={() => dispatch(markTaskDone(task.id))} />

              <input className='delete__Button' type='button' value='Delete' onClick={() => dispatch(deleteTask(task.id))} color='error' />
              <p>{task.description}</p>
            </li>
          </>
          )
        }
        )}
    </div>
  )
}
export default TasksList
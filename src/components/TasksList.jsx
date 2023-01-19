import { useRef } from "react";
import { useDispatch } from "react-redux"
import { deleteTask, markTaskDone, setUpdateData, setTasks } from "../store/slice/todoSlice";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const TasksList = ({ tasks, title }) => {

  const dispatch = useDispatch()

  // Drag function
  const dragItem = useRef();
  const dragOverItem = useRef();


  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...tasks];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(setTasks(copyListItems));
  };



  return (
    <div className="tasks__list" id='tasks__list__id'>
      <h1>{title}</h1>

      {/* update Data */}
      {tasks && tasks.length ? '' : 'No Tasks'}

      {/* To do Tasks */}
      {tasks && tasks.slice()
        // .sort((a, b) => a.id > b.id ? -1 : 1)
        .map((task, index) => {
          return (<>
            <li key={task.id} className='task__item'
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable>


              {task.isCompleted ?
                <input type='checkbox' checked className='finish__button' value='Finish' onClick={() => dispatch(markTaskDone(task.id))} /> :
                <input type='checkbox' className='finish__button' value='Finish' onClick={() => dispatch(markTaskDone(task.id))} />}

              <span>{task.title}</span>

              {
                task.isCompleted ? null :
                  <EditIcon className='edit__Button' type='button' value='Edit'
                    onClick={() => dispatch(setUpdateData({
                      "id": task.id,
                      "title": task.title,
                      "isCompleted": task.isCompleted ? true : false,
                      "description": task.description
                    }))
                    } />
              }
              <DeleteForeverIcon className='delete__Button' type='button' onClick={() => dispatch(deleteTask(task.id))} color='error' />
              <p>{task.description}</p>

              <DragIndicatorIcon />
            </li>
          </>
          )
        }
        )}
    </div>
  )
}
export default TasksList
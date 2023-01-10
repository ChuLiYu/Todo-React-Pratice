
const TaskList = ({ tasks, markTaskDone, setUpdateData, deleteTask }) => {

    return (
        <div className="tasks__list" id='tasks__list__id'>

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
                                    <input className='edit__Button' type='button' value='Edit'
                                        onClick={() => setUpdateData({
                                            "id": task.id,
                                            "title": task.title,
                                            "isCompleted": task.isCompleted ? true : false
                                        })
                                        } />
                            }
                            <input type='button' className='finish__button' value='Finish' onClick={() => markTaskDone(task.id)} />

                            <input className='delete__Button' type='button' value='Delete' onClick={() => deleteTask(task.id)} color='error' />
                        </li>
                    </>
                    )
                }
                )}
        </div>
    )

}
export default TaskList;
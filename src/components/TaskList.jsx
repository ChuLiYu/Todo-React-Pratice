import { useDispatch, useSelector } from "react-redux";
import { deleteTask, selectTodo, markTaskDone, setUpdateData } from "../store/slice/todoSlice";


const TaskList = () => {
	const states = useSelector(selectTodo)
	const updateData = useSelector(state => state.updateData)
	const tasks = states.tasks
	const dispatch = useDispatch()

	return (
		<div className="tasks__list" id='tasks__list__id'>

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
											"isCompleted": task.isCompleted ? true : false
										}))
										} />
							}
							<input type='button' className='finish__button' value='Finish' onClick={() => dispatch(markTaskDone(task.id))} />

							<input className='delete__Button' type='button' value='Delete' onClick={() => dispatch(deleteTask(task.id))} color='error' />
						</li>
					</>
					)
				}
				)}
		</div>
	)

}
export default TaskList;
import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "../store/slice/todoSlice";

import TasksList from "./TasksList";



const Todo = () => {
	const states = useSelector(selectTodo)
	const tasks = states.tasks.filter(task => task.isCompleted === false)

	return (
		<TasksList tasks={tasks} title="To do" />
	)

}
export default Todo;
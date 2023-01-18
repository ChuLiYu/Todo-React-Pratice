import { useSelector } from "react-redux"
import TasksList from "./TasksList";

export default function Done() {

  const tasks = useSelector(state => state.todo.tasks)
  const doneTasks = tasks.filter(task => task.isCompleted === true)
  return (
    <TasksList tasks={doneTasks} title="Completed" />
  )
}
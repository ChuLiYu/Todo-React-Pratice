import AddTaskForm from '../components/AddTaskForm';
import EditTaskForm from '../components/EditTaskForm'
import Todo from '../components/Todo'
import Title from '../components/Title'
import { useSelector } from 'react-redux';
import { selectTodo } from '../store/slice/todoSlice';


const TodoApp = () => {

  const states = useSelector(selectTodo)
  const updateData = states.updateData
  return (
    <>
      <Title text="Todo List" />
      {updateData && updateData ?
        (<EditTaskForm />) :
        (<AddTaskForm />)
      }
      <Todo />
    </>
  )
}
export default TodoApp
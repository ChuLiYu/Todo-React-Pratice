import { useDispatch, useSelector } from "react-redux";
import todoSlice, { cancelUpdate, changeTask, updateTask } from "../store/slice/todoSlice";

function EditTaskForm() {

    const dispatch = useDispatch()
    const taskTitle = useSelector(state => state.todo.updateData.title)
    return <>
        <form>
            <input type='text' onChange={(e) => { dispatch(changeTask(e.target.value)) }} value={taskTitle} />
            <input type="button" value='Update' onClick={() => dispatch(updateTask())} />
            <input type="button" value='Cancel' onClick={() => dispatch(cancelUpdate())} />
        </form>
    </>;
}
export default EditTaskForm;
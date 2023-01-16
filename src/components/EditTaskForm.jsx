import { useDispatch } from "react-redux";

function EditTaskForm({ changeTask, updateTask, cancelUpdate }) {

    const dispatch = useDispatch()
    return <>
        <form>
            <input type='text' onChange={e => { changeTask(e); }} />
            <input type="button" value='Update' onClick={updateTask} />
            <input type="button" value='Cancel' onClick={cancelUpdate} />
        </form>
    </>;
}
export default EditTaskForm;
function EditTaskForm(changeTask, updateTask, cancelUpdate) {
    return <>

        <form>
            <input type='text' onChange={e => { changeTask(e.target.value); }} />
            <input type="button" value='Update' onClick={updateTask} />
            <input type="button" value='Cancel' onClick={cancelUpdate} />
        </form>
    </>;
}
export default EditTaskForm;
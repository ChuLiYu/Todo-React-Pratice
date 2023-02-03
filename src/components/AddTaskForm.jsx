import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask, setNewTask } from '../store/slice/todoSlice'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: useSelector(state => state.todo.textFieldStyles.label.color)
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: useSelector(state => state.todo.textFieldStyles.underline.borderBottomColor)
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: useSelector(state => state.todo.textFieldStyles.outlinedInputRoot.fieldset.borderColor)
            },
            '&:hover fieldset': {
                borderColor: useSelector(state => state.todo.textFieldStyles.outlinedInputRoot.hoverFieldset.borderColor)
            },
            '&.Mui-focused fieldset': {
                borderColor: useSelector(state => state.todo.textFieldStyles.outlinedInputRoot.focusedFieldset.borderColor)
            },
        }
    },
    placeholder: {
        color: 'white'
    }
}));




export default function AddTaskForm() {
    const dispatch = useDispatch()
    const newTask = useSelector(state => state.todo.newTask)
    const classes = useStyles();


    return (

        <>
            <div className='add-task'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                    <TextField id="outlined-basic" label="Task" variant="outlined"
                        className='task__title' value={newTask} onChange={e => dispatch(setNewTask(e.target.value))} placeholder="Title here"
                        classes={{ root: classes.root }} />

                    <Button variant="contained" color="primary" type="submit" className='task__submit' onClick={() => dispatch(addTask(newTask))} accessKey='\n'
                        style={{ height: '60px' }}>+</Button >
                </div>
            </div>
        </>
    )
}
import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      { "id": 1, "title": "Task1", "isCompleted": false },
      { "id": 2, "title": "Task2", "isCompleted": false }
    ],
    newTask: "",
    updateData: ""
  },
  reducers: {
    // Add new task 
    addTask: (state, action) => {
      const newTask = ({
        "id": state.tasks.legth,
        "title": state.newTask,
        "isCompleted": false,
      });
      state.tasks.push(newTask)
      state.newTask = ''
    },
    setTasks: (state, action) => {
      state.tasks = action.payload
    },

    // set temp new task
    setNewTask: (state, action) => {
      state.newTask = action.payload
    },
    setUpdateData: (state, action) => {
      state.updateData = action.payload
    },


    // Change task for update
    changeTask: (state, action) => {
      let newTask = {
        id: state.updateData.id,
        title: action.payload,
        isCompleted: state.updateData.isCompleted ? true : false
      }
      state.updateData = newTask
    },

    //Update changed task
    updateTask: (state, action) => {

      const notChangeTasks = state.tasks.filter(task => task.id !== state.updateData.id)
      const updateTasks = [...notChangeTasks, state.updateData]
      state.tasks = updateTasks
      state.updateData = ''
    },

    //Cancel Update
    cancelUpdate: (state, action) => {
      state.updateData = ""
    },

    //Delete Task
    deleteTask: (state, action) => {
      const taskID = action.payload
      const newTasks = state.tasks.filter(task => task.id !== taskID)
      state.tasks = newTasks
    },

    markTaskDone: (state, action) => {
      const taskID = action.payload
      const newTasks = state.tasks.map(task => {
        if (task.id === taskID) { return ({ ...task, isCompleted: !task.isCompleted }) }
        return task
      })
      state.tasks = newTasks
    }



  },
});

export const selectTodo = (state) => state.todo;

export const { addTask, setNewTask, deleteTask, markTaskDone, setUpdateData, updateTask, cancelUpdate, changeTask } = todoSlice.actions;
export default todoSlice.reducer;
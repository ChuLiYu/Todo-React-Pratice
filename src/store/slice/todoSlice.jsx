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
        "isCompleted": false
      });
      state.tasks.push(newTask)
      state.newTask = ""
    },

    // set temp new task
    setNewTask: (state, action) => {
      const newTaskTitle = action.payload
      state.newTask = newTaskTitle
    },
    setUpdateData: (state, action) => {

      const newUpdateData = action.payload
      console.log(newUpdateData)
      state.updateData = newUpdateData
    },


    // Change task for update
    changeTask: (state, action, e) => {
      let newTask = {
        id: updateData.id,
        title: e.target.value,
        isCompleted: updateData.isCompleted ? true : false
      }
      setUpdateData(newTask)
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

export const { addTask, setNewTask, deleteTask, markTaskDone, setUpdateData } = todoSlice.actions;
export default todoSlice.reducer;
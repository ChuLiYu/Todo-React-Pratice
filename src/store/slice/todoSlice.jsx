import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      { "id": 1, "title": "Task1", "isCompleted": false },
      { "id": 2, "title": "Task2", "isCompleted": false }
    ],
    newTask: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = ({
        "id": state.tasks.legth,
        "title": state.newTask,
        "isCompleted": false
      });
      state.tasks.push(newTask)
      state.newTask = []
    },
    setNewTask: (state, action) => {
      const newTaskTitle = action.payload
      state.newTask = newTaskTitle
    }

  },
});

export const selectTodo = (state) => state.todo; // <---加入這行
export const selectNewTask = state => state.newTask
export const { addTask, setNewTask } = todoSlice.actions; // <-- 加上這行
export default todoSlice.reducer;
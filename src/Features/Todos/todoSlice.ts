// import { ActionIcon } from "@mantine/core";
// import { createSlice, nanoid } from "@reduxjs/toolkit";

// interface todoType {
//   id: string;
//   text: string;
// }
// const initialState = {
//   todos: [],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo: todoType = { id: nanoid(), text: action.payload };
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => {
//         todo.id != action.payload;
//       });
//     },
//   },
// });
// export const {addTodo,removeTodo} = todoSlice.actions
// export default todoSlice.actions
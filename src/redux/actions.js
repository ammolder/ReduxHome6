// ======= After createSlice =========
// ======= Більше цей файл не потрібен, логіку забра в на себе tasksSlice ===

// ======= Before createSlice =========
// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addTask = createAction('tasks/AddTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });
// export const deleteTask = createAction('tasks/deleteTask', taskId => {
//   return {
//     payload: taskId,
//   };
// });
// export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
//   return {
//     payload: taskId,
//   };
// });
// export const setStatusFilter = createAction(
//   'filters/setStatusFilter',
//   taskId => {
//     return {
//       payload: taskId,
//     };
//   }
// );
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

// ======= Before =======
// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

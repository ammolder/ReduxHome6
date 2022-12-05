import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';

// Імпортуємо функцію композиції редюсерів
//=============== After ========================
export const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

//=============== After ========================
export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    state.push(action.payload);
    // return [...state, action.payload];
  },
  [deleteTask]: (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
    // return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
    // return state.map(task => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return {
    //     ...task,
    //     completed: !task.completed,
    //   };
    // });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};
export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    state.status = action.payload;
    // return {
    //   ...state,
    //   status: action.payload,
    // };
  },
});

// ========== Before =========
// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
//   switch (action.type) {
//     case addTask.type:
//       // case logic
//       return [...state, action.payload];
//     case deleteTask.type:
//       // case logic
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       // case logic
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };
// const filtersInitialState = {
//   status: statusFilters.all,
// };
// export const filtersReducer = (state = filtersInitialState, action) => {
//   // Reducer code
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// ======== Oбширний запис
// import { combineReducers } from 'redux';
// import { statusFilters } from './constants';

// // Код редюсерів tasksReducer та filtersReducer
// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];
//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };
// const filtersInitialState = {
//   status: statusFilters.all,
// };
// // Відповідає лише за оновлення властивості filters
// // Тепер значенням параметра state буде об'єкт фільтрів
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// ======== Короткий запис ========
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
// ========== Довгий запис ======
// export const rootReducer = (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// =========== ОБШИРНИЙ ЗАПИС!!! ============
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// // Використовуємо initialState як значення стану за умовчанням
// export const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       // Кожен редюсер отримує всі екшени, відправлені в стор.
//       // Якщо редюсер не повинен обробляти якийсь тип екшену,
//       // необхідно повернути наявний стан без змін.
//       return state;
//   }
// };

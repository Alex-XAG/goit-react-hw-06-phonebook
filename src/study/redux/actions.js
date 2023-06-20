//=============== Before ========================
// const addTask = text => {
//     return { type: "tasks/AddTask", payload: text };
//   };
//   console.log(addTask("Learn Redux Toolkit"));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}
//=============== After ========================

import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
console.log(addTask('Learn Redux Toolkit'));
/**
 * {
 *   type: 'tasks/addTask',
 *   payload: {
 *     text: 'Learn Redux Toolkit',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     completed: false
 *   }
 * }
 **/

export const deleteTask = createAction('tasks/deleteTask', taskId => {
  return {
    payload: {
      taskId,
      id: nanoid(),
      completed: false,
    },
  };
});
export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
  return {
    payload: {
      taskId,
      id: nanoid(),
      completed: false,
    },
  };
});
export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => {
    return {
      payload: {
        value,
        id: nanoid(),
        completed: false,
      },
    };
  }
);

//////////////////////////////////////////////////
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

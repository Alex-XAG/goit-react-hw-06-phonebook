import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

// console.log(myValueSlice);
export const { increment, decrement } = myValueSlice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// // console.log(increment(100)); // {type: 'myValue/increment', payload: 100}

// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// };

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
  },
});

//=============== Before ========================
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
//=============== Toolkit ========================
// import { configureStore } from '@reduxjs/toolkit';

// // import { tasksReducer, filtersReducer } from './reducer'; ////////////   Before!!!

// //=============== After ========================
// import { tasksReducer } from './TasksSlice';
// import { filtersReducer } from './filtersSlice';
// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

// //////////////////////////////////////////////////////////////
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// // Начальное значение состояния Redux для корневого редюсера,
// // если не передать параметр preloadedState.
// //////////////////////////////////////////////////////
// // const initialState = {
// //   tasks: [
// //     { id: 0, text: 'Learn HTML and CSS', completed: true },
// //     { id: 1, text: 'Get good at JavaScript', completed: true },
// //     { id: 2, text: 'Master React', completed: false },
// //     { id: 3, text: 'Discover Redux', completed: false },
// //     { id: 4, text: 'Build amazing apps', completed: false },
// //   ],
// //   filters: {
// //     status: 'all',
// //   },
// // };
// // Пока что используем редюсер который
// // только возвращает полученное состояние
// // const rootReducer = (state = initialState, action) => {
// //   return state;
// // };
// ////////////////////////////////////////////////////////////

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

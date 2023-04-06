import { createContext, useEffect, useContext, useReducer } from "react";

import { actionTypes } from "../../reducer/actionTypes";
import { appReducer } from "../../reducer/appReducer";
import useFetch from "../../hooks/useFetch";

export const initialState = {
  theme: "",
  data: [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  const setAppTheme = (theme) => {
    dispatch({
      type: actionTypes.SET_APP_THEME,
      payload: theme,
    });
  };

  const getDentistsData = async (url) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: true,
    });
    
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      const data = await resp.json();
      dispatch({
        type: actionTypes.SET_DENTISTS_DATA,
        payload: data,
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    }
  };

  const value = {
    ...appState,
    setAppTheme,
    getDentistsData,
  };

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};

export const useApp = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};

// const TodoContext = createContext();

// const getInitState = () => {
//   return [];
//   // return JSON.parse(localStorage.getItem("taskList")) || [];
// };

// export const TodoContextProvider = ({ children }) => {
//   const [todoList, dispatch] = useReducer(todoReducer, [], getInitState);

//   const addTask = (newTask) => {
//     dispatch({
//       type: actionTypes.ADD_TASK,
//       payload: newTask
//     })
//   };

//   const deleteTask = (taskId) => {};

//   const completeTask = (taskId) => {};

//   const editTask = (taskId, newTaskInfo) => {};

//   const value = {
//     todoList,
//     addTask,
//     editTask,
//     deleteTask,
//     completeTask,
//     todoCount: todoList.length,
//     pendingTodoCount: todoList.filter((task) => !task.completed).length,
//   };

//   // useEffect(() => {
//   //   localStorage.setItem("taskList", JSON.stringify(todoList));
//   // }, [todoList]);

//   return (
//     <TodoContext.Provider value={value}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export const useTodo = () => {
//   const context = useContext(TodoContext);
//   if (!context) {
//     throw new Error("Context Error");
//   }
//   return context;
// };

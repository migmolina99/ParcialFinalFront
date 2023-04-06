import { createContext, useContext, useEffect, useReducer } from "react";

import { actionTypes } from "../../reducer/actionTypes";
import { appReducer } from "../../reducer/appReducer";

export const initialState = {
  theme: "",
  loading: false,
  data: [],
  favorites: JSON.parse(localStorage.getItem("favoriteDentists")) || [],
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
      setTimeout(() => {
        dispatch({
          type: actionTypes.SET_LOADING,
          payload: false,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    }
  };

  const addFavoriteDentist = (dentist) => {
    dispatch({
      type: actionTypes.ADD_FAVORITE_DENTIST,
      payload: dentist,
    });
  };

  const deleteFavoriteDentist = (dentistId) => {
    dispatch({
      type: actionTypes.DELETE_FAVORITE_DENTIST,
      payload: dentistId,
    });
  };

  useEffect(() => {
    console.log("Change localStorage");
    localStorage.setItem(
      "favoriteDentists",
      JSON.stringify(appState.favorites)
    );
  }, [appState.favorites]);

  const value = {
    ...appState,
    setAppTheme,
    getDentistsData,
    addFavoriteDentist,
    deleteFavoriteDentist,
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

import { createContext, useContext, useEffect, useReducer } from "react";

import { appReducer } from "../reducer/appReducer";
import { actionTypes } from "../reducer/actionTypes";

export const initialState = {
  theme: "",
  data: [],
  loading: false,
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

  const setLoading = (loading) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: loading,
    });
  };

  const getDentistsData = async (url) => {
    setLoading(true);

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
        setLoading(false);
      }, 500);
    } catch (error) {
      setLoading(false);
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
    localStorage.setItem("favoriteDentists", JSON.stringify(appState.favorites));
  }, [appState.favorites]);

  const value = {
    ...appState,
    setAppTheme,
    getDentistsData,
    addFavoriteDentist,
    deleteFavoriteDentist,
  };

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useApp = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};

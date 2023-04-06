import { actionTypes } from "./actionTypes";

export const appReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.SET_APP_THEME:
      return {
        ...state,
        theme: payload,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case actionTypes.SET_DENTISTS_DATA:
      return {
        ...state,
        data: Array.isArray(payload) ? [...payload] : payload,
      };
    default:
      return state;
  }
};

import { useReducer } from 'react';

const GET_MEMOS = 'GET_MEMOS';
const GET_GROUPS = 'GET_GROUPS';
const SET_MEMOS = 'SET_MEMOS';
const SET_GROUPS = 'SET_GROUPS';
const UPDATE_MEMOS = 'UPDATE_MEMOS';

const defaultState = { memos: [], groups: [] };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_MEMOS:
      return {
        ...state,
      };
    case GET_GROUPS:
      return {
        ...state,
      };
    case SET_MEMOS:
      state.memos.push(...action.payload);
      return {
        ...state,
      };
    case SET_GROUPS:
      state.groups.push(...action.payload);
      return {
        ...state,
      };
    case UPDATE_MEMOS:
      state.groups.push(action.payload);

      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultState);

  return { globalState, globalDispatch };
};

export default useGlobalState;

import * as types from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  getRoom: []
};

export default function reducerRoom(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_ROOM}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_ROOM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        getRoom: action.payload.data
      };

    case `${types.GET_ROOM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

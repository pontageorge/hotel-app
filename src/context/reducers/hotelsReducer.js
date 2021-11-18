import { GET_HOTELS } from "context/actionTypes";

export const hotelsReducer = (state, action) => {
  switch (action.type) {
    case GET_HOTELS:
      return action.payload;
    default:
      return state;
  }
};

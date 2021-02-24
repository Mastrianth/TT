import * as actions from "../actions";

const initialState = {
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

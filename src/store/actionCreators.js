import { SHOW_MODAL, SET_IS_SUCCESS_MODAL, CLOSE_MODAL } from "./actions";
import axios from "axios";

import * as actions from "./actions";

import { toggleIsFetching } from "./toggleIsFetchingActions";

export const createShowModal = () => ({ type: SHOW_MODAL });
export const createCloseModal = () => ({ type: CLOSE_MODAL });
export const createSetIsSuccessModal = (payload) => ({
  type: SET_IS_SUCCESS_MODAL,
  payload,
});

const fetchUsers = (url, actionsType) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const res = await axios.get(url);

  dispatch(toggleIsFetching(false));

  return dispatch({ type: actionsType, payload: res.data });
};

export const getFirstUsers = (url) =>
  fetchUsers(url, actions.GET_FIRST_USERS, "data");

export const getNextUsers = (url) =>
  fetchUsers(url, actions.GET_NEXT_USERS, "data");

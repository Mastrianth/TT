import { GET_FIRST_USERS, GET_NEXT_USERS, GET_USERS } from "../actions";

const initialState = {
  users: [],
  nextUrl: "",
  totalPages: 0,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    case GET_FIRST_USERS:
      return {
        ...state,
        ...payload,
        nextUrl: payload.links.next_url,
        totalPages: payload.total_pages,
      };

    case GET_NEXT_USERS:
      return {
        ...state,
        count: payload.count,
        page: payload.page,
        links: payload.links,
        nextUrl: payload.links.next_url,
        totalPages: payload.total_pages,
        users: [...state.users, ...payload.users],
      };
    default:
      return state;
  }
};

export default usersReducer;

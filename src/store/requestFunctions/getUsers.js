import axios from "axios";
import { GET_USERS } from "../actions";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";
const DESKTOP_USERS_LIST_COUNT = 6;
const MOBILE_USERS_LIST_COUNT = 3;

export const APIUrls = {
  getUsersTabletStartPage: `${BASE_URL}users?page=1&count=${DESKTOP_USERS_LIST_COUNT}`,
  getUsersMobileStartPage: `${BASE_URL}users?page=1&count=${MOBILE_USERS_LIST_COUNT}`,
};

function getUsers() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
      );
      const payload = data.users.sort(
        (a, b) => b["registration_timestamp"] - a["registration_timestamp"]
      );
      dispatch({ type: GET_USERS, payload });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default getUsers;

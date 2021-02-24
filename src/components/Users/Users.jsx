import React, { useCallback, useEffect } from "react";
import { UsersList } from "../UsersList/UsersList";
import { Loader } from "../Loader/Loader";
import "./Users.scss";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { APIUrls } from "../../store/requestFunctions/getUsers";
import { getFirstUsers, getNextUsers } from "../../store/actionCreators";

export const Users = () => {
  const { users, totalPages, nextUrl } = useSelector(
    (state) => state.users,
    shallowEqual
  );
  const dispatch = useDispatch();

  const loadUsers = useCallback(() => {
    const url =
      window.innerWidth < 768
        ? APIUrls.getUsersMobileStartPage
        : APIUrls.getUsersTabletStartPage;

    dispatch(getFirstUsers(url));
  }, [dispatch]);
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleNextUsersList = () => {
    dispatch(getNextUsers(nextUrl));
  };

  const isFetching = useSelector(
    (store) => store.toggleIsFetchingReducer.isFetching
  );

  return (
    <section className="users">
      <div className="container">
        <div className="users-head">
          <h1>Our cheerful users</h1>
          <p>Attention! Sorting users by registration date</p>
        </div>
        {!users.length ? <Loader /> : <UsersList users={users} />}

        {nextUrl && new URL(nextUrl).searchParams.get("page") <= totalPages && (
          <button
            disabled={isFetching}
            className="btn-show-more btn"
            onClick={handleNextUsersList}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

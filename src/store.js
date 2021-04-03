import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./component/users/UserSlice";

export default configureStore({
  reducer: {
    users:usersReducer,
  },
});
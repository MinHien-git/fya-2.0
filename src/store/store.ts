import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/users/userSplice";

export default configureStore({
  reducer: {
    user: counterReducer,
  },
});

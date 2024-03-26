import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSplice";
import projectReducer from "../features/projects/projectSplice";

export default configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
  },
});

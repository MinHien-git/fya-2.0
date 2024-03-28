import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSplice";
import projectReducer from "../features/projects/projectSplice";
import pageReducer from "../features/pages/pageSplice";

export default configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    page: pageReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apliSlice";

const { default: userSlice } = require("./userSlice");

const appStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: userSlice,
  },
});

export default appStore;

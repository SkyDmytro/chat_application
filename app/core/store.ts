import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxSlices/usersSlice";
import chatsReducer from "./reduxSlices/chatsSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

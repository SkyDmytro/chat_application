import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxSlices/usersSlice";
import chatsReducer from "./reduxSlices/chatsSlice";
import settingsReducer from "./reduxSlices/settingsSlice";
import uiReducer from "./reduxSlices/uiSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    chats: chatsReducer,
    settings: settingsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chatType } from "../types/chatTypes";
import { userType } from "../types/userTypes";

interface SettingsState {
  currentUser: userType;
}

const initialState: SettingsState = {
  currentUser: {
    id: "1",
    username: "Dima",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<userType>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateCurrentUser } = settingsSlice.actions;

export default settingsSlice.reducer;

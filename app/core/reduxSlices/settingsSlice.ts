import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  currentUserId: string;
  currentUserName: string;
}

const initialState: SettingsState = {
  currentUserId: "3",
  currentUserName: "Valeriy",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload;
    },
  },
});

export const { updateCurrentUser } = settingsSlice.actions;

export default settingsSlice.reducer;

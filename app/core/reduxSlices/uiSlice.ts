import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../types/userTypes";

interface UiStateType {
  isAddChatDialogOpened: boolean;
}
const initialState: UiStateType = {
  isAddChatDialogOpened: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDialogWindow: (state) => {
      state.isAddChatDialogOpened = !state.isAddChatDialogOpened;
    },
  },
});

export const { toggleDialogWindow } = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../types/userTypes";

interface UserStateType {
  users: userType[];
}
const initialState: UserStateType = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userType>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<userType>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    initializeUsers: (state, action: PayloadAction<userType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, updateUser, removeUser, initializeUsers } =
  usersSlice.actions;

export default usersSlice.reducer;

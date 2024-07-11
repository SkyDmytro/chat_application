import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../types/userTypes";
import { getUsers as getUsersApi } from "../api/usersApi";

interface UserStateType {
  users: userType[];
  isLoading: boolean;
}
const initialState: UserStateType = {
  users: [],
  isLoading: false,
};

export const fetchUsers = createAsyncThunk("chats/getUsers", async () => {
  const data = await getUsersApi();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

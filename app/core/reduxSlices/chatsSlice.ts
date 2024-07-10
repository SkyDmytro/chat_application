import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chatType } from "../types/chatTypes";

interface ChatsState {
  chats: chatType[];
}

const initialState: ChatsState = {
  chats: [],
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<chatType>) => {
      state.chats.push(action.payload);
    },
    updateChat: (state, action: PayloadAction<chatType>) => {
      const index = state.chats.findIndex(
        (chat) => chat.id === action.payload.id
      );
      if (index !== -1) {
        state.chats[index] = action.payload;
      }
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter((chat) => chat.id !== action.payload);
    },
    initializeChats: (state, action: PayloadAction<chatType[]>) => {
      state.chats = action.payload;
    },
  },
});

export const { addChat, updateChat, removeChat, initializeChats } =
  chatsSlice.actions;

export default chatsSlice.reducer;

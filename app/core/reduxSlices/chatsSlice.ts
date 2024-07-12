import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { chatType } from "../types/chatTypes";
import {
  getChats as getChatsApi,
  addChat as addChatApi,
  connectToChat as connectToChatApi,
  deleteChat as deleteChatApi,
} from "../api/chatsApi";

interface ChatsState {
  chats: chatType[];
  isLoading: boolean;
  error?: string;
}

const initialState: ChatsState = {
  chats: [],
  isLoading: true,
};

export const fetchChats = createAsyncThunk("chats/getChats", async () => {
  const data = await getChatsApi();
  return data;
});

export const addChat = createAsyncThunk(
  "chats/addChat",
  async (chatName: string) => {
    const data = await addChatApi(chatName);
    return data;
  }
);

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (chatId: string) => {
    const data = await deleteChatApi(chatId);
    return data;
  }
);

export const connectToChat = createAsyncThunk(
  "chats/connectToChat",
  async (chatId: string, { getState }) => {
    const state = getState() as RootState;
    const { currentUserId, currentUserName } = state.settings;
    const data = await connectToChatApi(chatId, {
      username: currentUserName,
      id: currentUserId,
    });
    return data;
  }
);
const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch chats";
      });

    builder
      .addCase(addChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(addChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to add chat";
      });

    builder
      .addCase(deleteChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(deleteChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to delete chat";
      });
    builder
      .addCase(connectToChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connectToChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(connectToChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to delete chat";
      });
  },
});

export default chatsSlice.reducer;

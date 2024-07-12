import { userType } from "../types/userTypes";

const URL = process.env.EXPO_PUBLIC_BASE_URL;
const getChats = async () => {
  try {
    const response = await fetch(`${URL}/chat/chats`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chats:", error);
    throw error;
  }
};

const addChat = async (chatName: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatName: chatName }),
  };

  try {
    const response = await fetch(`${URL}/chat/createChat`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding chat:", error);
    throw error;
  }
};

const deleteChat = async (chatId: string) => {
  try {
    const response = await fetch(`${URL}/chat/deleteChat/${chatId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting chat:", error);
    throw error;
  }
};

const connectToChat = async (chatId: string, currentUser: userType) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId, currentUser }),
  };

  try {
    const response = await fetch(`${URL}/chat/createChat`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error connecting to chat:", error);
    throw error;
  }
};

export { addChat, connectToChat, deleteChat, getChats };

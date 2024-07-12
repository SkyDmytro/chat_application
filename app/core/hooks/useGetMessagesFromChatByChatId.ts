import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useGetMessagesFromChatByChatId = (chatId: string) => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  return chats.find((chat) => chat.id === chatId)?.messages || [];
};

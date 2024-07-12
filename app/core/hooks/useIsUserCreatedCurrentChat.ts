import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useIsUserCreatedCurrentChat = (chatId: string) => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  const currentUserId = useSelector(
    (state: RootState) => state.settings.currentUserId
  );

  const currentChat = chats.find((chat) => chat.id === chatId);
  return currentChat?.creator.id === currentUserId;
};

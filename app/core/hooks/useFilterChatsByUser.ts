import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useFilterChatsByUser = () => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  const currentUser = useSelector(
    (state: RootState) => state.settings.currentUser
  );

  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.participants.some((participant) => participant.id === currentUser.id)
    );
  }, [chats, currentUser]);

  return filteredChats;
};

import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { StyledView } from "../shared/StyledView";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { chatType } from "../core/types/chatTypes";
import { userType } from "../core/types/userTypes";
import { ChatList } from "../shared/ChatList";
import { SearchBar } from "../shared/SearchBar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../core/store";
import { addChat, initializeChats } from "../core/reduxSlices/chatsSlice";
import { addUser, initializeUsers } from "../core/reduxSlices/usersSlice";
import { useFilterChatsByUser } from "../core/hooks/useFilterChatsByUser";

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
const user1: userType = {
  id: "1",
  username: "Dima",
};
const user2: userType = {
  id: "2",
  username: "Oleg",
};
const user3: userType = {
  id: "3",
  username: "Valeriy",
};
const chats: chatType[] = [
  {
    chatName: "firstChat",
    id: "1",
    participants: [user1, user2],
  },
  {
    chatName: "second Chat",
    id: "2",
    participants: [user1, user2],
  },
  {
    chatName: "Third Chat",
    id: "3",
    participants: [user1, user2],
  },
  {
    chatName: "Fourth Chat",
    id: "4",
    participants: [user1, user3],
  },
];
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(initializeUsers([user1, user2]));
  dispatch(initializeChats(chats));
  const filteredChatsByUser = useFilterChatsByUser();
  console.log(filteredChatsByUser, 1);
  const [filteredChats, setFilteredChats] =
    useState<chatType[]>(filteredChatsByUser);

  return (
    <View style={styles.screen}>
      <SearchBar onFilterChats={setFilteredChats} chats={filteredChatsByUser} />
      <ChatList chats={filteredChats} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    fontSize: 24,
    paddingTop: 40,
    margin: 10,
    flex: 1,
  },
});
export default HomeScreen;

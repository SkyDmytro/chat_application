import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { chatType, messageType } from "../core/types/chatTypes";
import { userType } from "../core/types/userTypes";
import { ChatList } from "../shared/ChatList";
import { SearchBar } from "../shared/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../core/store";
import { addChat, initializeChats } from "../core/reduxSlices/chatsSlice";
import { addUser, initializeUsers } from "../core/reduxSlices/usersSlice";
import { AvatarIcon } from "../shared/AvatarIcon";
import { CreateChatButton } from "../shared/CreateChatButton";

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
const messageFromUser1: messageType = {
  sender: user1,
  text: "Test message",
  timeWhenSended: new Date().getDate(),
};
const messageFromUser3: messageType = {
  sender: user3,
  text: "Test message",
  timeWhenSended: new Date().getDate(),
};
const chats: chatType[] = [
  {
    chatName: "firstChat",
    id: "1",
    participants: [user1, user2],
    creator: user1,
    messages: [],
  },
  {
    chatName: "second Chat",
    id: "2",
    participants: [user1, user2],
    creator: user1,
    messages: [messageFromUser1, messageFromUser1],
  },
  {
    chatName: "Third Chat",
    id: "3",
    participants: [user1, user2],
    creator: user2,
    messages: [messageFromUser1, messageFromUser1],
  },
  {
    chatName: "Fourth Chat",
    id: "4",
    participants: [user1, user3],
    creator: user3,
    messages: [
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
    ],
  },
  {
    chatName: "fifth Chat",
    id: "5",
    participants: [user1, user2],
    creator: user1,
    messages: [],
  },
  {
    chatName: "sixth Chat",
    id: "6",
    participants: [user1, user2],
    creator: user1,
    messages: [messageFromUser1, messageFromUser1],
  },
  {
    chatName: "seventh Chat",
    id: "7",
    participants: [user1, user2],
    creator: user2,
    messages: [messageFromUser1, messageFromUser1],
  },
  {
    chatName: "eighth Chat",
    id: "8",
    participants: [user1, user3],
    creator: user3,
    messages: [
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
      messageFromUser1,
      messageFromUser1,
      messageFromUser3,
    ],
  },
  {
    chatName: "ninth Chat",
    id: "9",
    participants: [user2, user3],
    creator: user2,
    messages: [],
  },
  {
    chatName: "tenth Chat",
    id: "10",
    participants: [user1, user3],
    creator: user1,
    messages: [messageFromUser1],
  },
];

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(initializeUsers([user1, user2]));
  dispatch(initializeChats(chats));
  const currentUserName = useSelector(
    (state: RootState) => state.settings.currentUserName
  );
  const [filteredChats, setFilteredChats] = useState<chatType[]>(chats);

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <SearchBar onFilterChats={setFilteredChats} chats={chats} />
        <AvatarIcon text={currentUserName} onPress={() => console.log(1321)} />
      </View>
      <ScrollView bounces={false}>
        <ChatList chats={filteredChats} />
      </ScrollView>
      <CreateChatButton onPress={() => {}} />
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
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default HomeScreen;

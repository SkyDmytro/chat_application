import React, { useState } from "react";
import { Text, View } from "react-native";
import { StyledView } from "../shared/StyledView";
import { LayoutBottomTabNavigation } from "../shared/LayoutBottomTabNavigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { chatType } from "../core/types/chatTypes";
import { userType } from "../core/types/userTypes";
import { ChatList } from "../shared/ChatList";
import { SearchBar } from "../shared/SearchBar";

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
];
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [filteredChats, setFilteredChats] = useState<chatType[]>(chats);

  return (
    <LayoutBottomTabNavigation navigation={navigation}>
      <View>
        <SearchBar onFilterChats={setFilteredChats} chats={chats} />
        <ChatList chats={filteredChats} />
      </View>
    </LayoutBottomTabNavigation>
  );
};

export default HomeScreen;

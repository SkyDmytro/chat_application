import React, { useEffect, useMemo, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { toggleDialogWindow } from "../core/reduxSlices/uiSlice";
import { chatType, messageType } from "../core/types/chatTypes";
import { AppDispatch, RootState } from "../core/store";
import { addChat, fetchChats } from "../core/reduxSlices/chatsSlice";
import { fetchUsers } from "../core/reduxSlices/usersSlice";
import { ChatList } from "../shared/ChatList";
import { SearchBar } from "../shared/SearchBar";
import { AvatarIcon } from "../shared/AvatarIcon";
import { AddChatButton } from "../shared/AddChatButton";
import { AddChatDialogWindow } from "../shared/AddChatDialogWindow";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { ErrorScreen } from "../shared/ErrorComponent";

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
    dispatch(fetchUsers());
  }, [dispatch]);

  const currentUserName = useSelector(
    (state: RootState) => state.settings.currentUserName
  );
  const {
    chats,
    isLoading: isChatsLoading,
    error,
  } = useSelector((state: RootState) => state.chats);
  const { users, isLoading: isUsersLoading } = useSelector(
    (state: RootState) => state.users
  );
  const isDialogOpened = useSelector(
    (state: RootState) => state.ui.isAddChatDialogOpened
  );
  const [filteredChats, setFilteredChats] = useState<chatType[]>([]);

  useEffect(() => {
    setFilteredChats(chats);
  }, [chats]);

  const handleOpenDialog = () => {
    dispatch(toggleDialogWindow());
  };

  const handleAddNewChat = (chatName: string) => {
    dispatch(addChat(chatName));
  };

  if (isChatsLoading || isUsersLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorScreen errorMessage="Something went wrong" />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <SearchBar onFilterChats={setFilteredChats} chats={chats} />
        <AvatarIcon text={currentUserName} onPress={() => console.log(1321)} />
      </View>
      {isDialogOpened && <AddChatDialogWindow />}
      <ScrollView bounces={false}>
        <ChatList chats={filteredChats} />
      </ScrollView>
      <AddChatButton
        isDialogOpened={isDialogOpened}
        onPress={handleOpenDialog}
      />
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

import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

type ScreenName = "Home" | "Chat";

type ParamsType = {
  chatId: string;
  chatName: string;
};

export const useNavigationCustom = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const navigateToScreen = (screenName: ScreenName, params?: ParamsType) => {
    navigation.navigate(screenName, params);
  };

  return { navigateToScreen };
};

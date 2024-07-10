import { userType } from "./userTypes";

export interface chatType {
  id: string;
  chatName: string;
  participants: userType[];
  creator: userType;
  messages: messageType[];
}

export interface messageType {
  text: string;
  sender: userType;
  timeWhenSended: number;
}

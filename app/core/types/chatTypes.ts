import { userType } from "./userTypes";

export interface chatType {
  id: string;
  chatName: string;
  participants: userType[];
}

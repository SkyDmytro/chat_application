import { avatars } from "./constants";
export const getRandomAvatar = () => {
  const randIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randIndex];
};

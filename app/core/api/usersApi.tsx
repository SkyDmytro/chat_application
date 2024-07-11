export const getUsers = async () => {
  const URL = process.env.EXPO_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chats:", error);
    throw error;
  }
};

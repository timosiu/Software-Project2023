const url = import.meta.env.VITE_API_URL;

export const getRooms = async () => {
  const response = await fetch(url + "/api/rooms");
  return await response.json();
};

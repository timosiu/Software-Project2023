const url = import.meta.env.VITE_API_URL;

export const getRooms = async () => {
  const response = await fetch(url + "/api/rooms");
  return await response.json();
};

export const getRoom = async (id) => {
  const response = await fetch(url + "/api/rooms/" + id);
  return await response.json();
};

const url = import.meta.env.VITE_API_URL;

// Get all rooms from server
export const getRooms = async () => {
  const response = await fetch(url + "/api/rooms");
  return await response.json();
};

// Get room from server using the room's id
export const getRoom = async (id) => {
  const response = await fetch(url + "/api/rooms/" + id);
  return await response.json();
};

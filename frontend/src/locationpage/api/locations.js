const url = import.meta.env.VITE_API_URL;

export const getLocations = async () => {
  const response = await fetch(url + "/api/locations");
  return await response.json();
};

const url = import.meta.env.VITE_API_URL;

// Get all services from server
export const getServices = async () => {
  const response = await fetch(url + "/api/services");
  return await response.json();
};

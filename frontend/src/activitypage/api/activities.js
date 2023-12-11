const url = import.meta.env.VITE_API_URL;

// Fetch activities from server
export const getActivities = async () => {
  const response = await fetch(url + "/api/activities");
  return await response.json();
};

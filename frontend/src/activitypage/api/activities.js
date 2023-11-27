const url = import.meta.env.VITE_API_URL;

export const getActivities = async () => {
  const response = await fetch(url + "/api/activities");
  return await response.json();
};

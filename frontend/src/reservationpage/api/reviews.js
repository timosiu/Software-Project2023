const url = import.meta.env.VITE_API_URL;

export const getReviews = async (id) => {
  const response = await fetch(url + "/api/reviews/" + id);
  return await response.json();
};

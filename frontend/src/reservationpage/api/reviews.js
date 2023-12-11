const url = import.meta.env.VITE_API_URL;

// Get room's reviews from server using the room's id
export const getReviews = async (id) => {
  const response = await fetch(url + "/api/reviews/" + id);
  return await response.json();
};

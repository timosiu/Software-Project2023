const url = import.meta.env.VITE_API_URL;

// Get all the current user's reservations
export const getReservations = async (token) => {
  const response = await fetch(url + "/api/reservations/myreservations", {
    credentials: "include",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "BEARER " + token,
    },
  });

  return await response.json();
};

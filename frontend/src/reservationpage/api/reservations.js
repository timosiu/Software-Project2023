const url = import.meta.env.VITE_API_URL;

// create a reservation for the current user
export const createReservation = async (reservation, token) => {
  const response = await fetch(url + "/api/reservations", {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(reservation),
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + token,
    },
  });

  return await response.json();
};

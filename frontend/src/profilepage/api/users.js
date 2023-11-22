const url = import.meta.env.VITE_API_URL;
export const getProfile = async (token) => {
  const response = await fetch(url + "/api/users/", {
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

export const editImage = async (image, token) => {
  const response = await fetch(url + "/api/users/edit-image/", {
    credentials: "include",
    method: "PUT",
    body: JSON.stringify({ image }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + token,
    },
  });

  return await response.json();
};

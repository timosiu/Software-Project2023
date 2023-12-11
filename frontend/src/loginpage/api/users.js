const url = import.meta.env.VITE_API_URL;

// send login request to server
export const loginUser = async ({ email, password }) => {
  const response = await fetch(url + "/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return await responseHandler(response);
};

// send signup request to server
export const signUpUser = async ({ name, email, password }) => {
  const response = await fetch(url + "/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  return await responseHandler(response);
};

// Handle response from server and throw error if error from server
const responseHandler = async (res) => {
  try {
    let errorMessage;

    switch (res.status) {
      case 201:
        return res.json();

      case 400:
        errorMessage = {
          message: "Please choose a password with at least 5 characters",
        };
        throw new Error(errorMessage.message);

      case 401:
        errorMessage = await res.json();
        throw new Error(errorMessage.message);

      case 422:
        errorMessage = await res.json();
        throw new Error(errorMessage.message);

      case 500:
        errorMessage = await res.json();
        throw new Error(errorMessage.message);

      default:
        console.log("default");
        errorMessage = { message: "Something went wrong" };
        throw new Error(errorMessage.message);
    }
  } catch (error) {
    throw error;
  }
};

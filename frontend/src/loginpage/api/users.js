const url = import.meta.env.VITE_API_URL;
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

const responseHandler = async (res) => {
  try {
    let errorMessage;

    switch (res.status) {
      case 201:
        console.log("201");
        return res.json();

      case 400:
        console.log("400");
        errorMessage = {
          message: "Please choose a password with at least 5 characters",
        };
        throw new Error(errorMessage.message);

      case 401:
        console.log("401");
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

    /*  if (res.status === 401) {
      console.log("responseinusers.js");
      console.log(res.status);
      const error = await res.text();
      console.log(error);
    } else {
      return await response;
    }*/
  } catch (error) {
    console.log("error catch");
    console.log(error);
    throw error;
  }
};

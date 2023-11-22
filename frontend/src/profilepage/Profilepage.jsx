import { useState, useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/auth-context";
import { getProfile, editImage } from "./api/users";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Profilepage = () => {
  const auth = useContext(AuthContext);

  let defaultImageUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  const urlRef = useRef();

  const { isLoading, error, data } = useQuery(
    ["userData", auth.token],
    () => getProfile(auth.token),
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  useEffect(() => {
    if (auth.isLoggedIn) {
      let resData = data;
      let newData = [];
      newData.push({
        name: resData.name,
        email: resData.email,
        created: resData.created.slice(0, -14),
        image: resData.image,
      });

      if (newData[0].image == null) {
        newData[0].image = defaultImageUrl;
      }
      setUserData(newData[0]);
    }
  }, [data]);

  const [userData, setUserData] = useState({
    name: "User Userson",
    email: "user@example.com",
    created: "01-01-2000",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log("in handlefile");
    let imgUrl = urlRef.current.value;
    editImage(imgUrl, auth.token);
    setTimeout(function () {
      window.location.reload();
    }, 200);
  };

  let content = "";

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = "Something went wrong";
  } else {
    content = (
      <div className="grid grid-cols-3 gap-y-32 gap-x-10 mt-20 place-items-center bg-gray-50 dark:bg-neutral-800 rounded-t-3xl w-full p-10 pt-20 h-screen">
        <div className="">
          <img
            src={userData.image}
            className="aspect-square h-60 object-cover rounded-lg mt-10"
          ></img>
          {auth.isLoggedIn && (
            <form onSubmit={handleFileChange}>
              <input
                type="text"
                id="imageUrl"
                ref={urlRef}
                placeholder="Image URL..."
              ></input>
              <button
                className=" bg-sky-500 hover:bg-sky-700 text-gray-50 font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Update Picture
              </button>
            </form>
          )}
        </div>
        <div className="">
          <h1 className="text-xl text-gray-900 dark:text-gray-50 underline">
            Info
          </h1>
          <p className="text-base text-gray-900 dark:text-gray-50">
            Name: {userData.name}
          </p>
          <p className="text-base text-gray-900 dark:text-gray-50">
            Email: {userData.email}
          </p>
          <p className="text-base text-gray-900 dark:text-gray-50">
            Account Created: {userData.created}
          </p>
          <br />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-pink-500 h-screen">
      <div className="flex flex-col place-items-center min-h-1/2 mx-10">
        <h1 className="text-8xl mt-32 text-gray-50 text-center">
          Your Profile
        </h1>
      </div>
      {content}
    </div>
  );
};

export default Profilepage;

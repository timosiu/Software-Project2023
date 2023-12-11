import { useState, useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/auth-context";
import { getProfile, editImage } from "./api/users";
import { getReservations } from "./api/reservations";
import { getRooms } from "../reservationpage/api/rooms";
import { LoadingSpinner } from "../components/LoadingSpinner";

// Profile page for displaying user info and reservations
const Profilepage = () => {
  const auth = useContext(AuthContext);

  // Default image for user
  let defaultImageUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  const urlRef = useRef();

  // Fetch rooms & user's info and reservations
  const { isLoading, error, data } = useQuery(
    ["userData", auth.token],
    () => getProfile(auth.token),
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  const {
    isLoading: isLoadingRes,
    error: errorRes,
    data: dataRes,
  } = useQuery(
    ["reservations", auth.token],
    () => getReservations(auth.token),
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  const {
    isLoading: isLoadingRooms,
    error: errorRooms,
    data: dataRooms,
  } = useQuery(["rooms"], getRooms);

  // Set user's info
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

  // Default user data state
  const [userData, setUserData] = useState({
    name: "User Userson",
    email: "user@example.com",
    created: "01-01-2000",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  // Handle image change
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

  // Display user's info
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = "Something went wrong";
  } else {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-32 gap-x-10 mt-20 sm:place-items-center bg-light-bg dark:bg-dark-bg w-full p-10">
        <div className="">
          <img
            src={userData.image}
            className="aspect-square h-60 object-cover rounded-lg mt-10"
          ></img>

          {auth.isLoggedIn && (
            // Form for changing profile picture: image url and submit button
            <form onSubmit={handleFileChange}>
              <input
                type="text"
                id="imageUrl"
                ref={urlRef}
                placeholder="Image URL..."
              ></input>
              <button
                className=" bg-haven-red hover:bg-light-accent dark:hover:bg-dark-accent text-light-text dark:text-dark-text font-bold py-2 px-4"
                type="submit"
              >
                Update Picture
              </button>
            </form>
          )}
        </div>
        <div className="">
          <h1 className="text-xl text-light-text dark:text-dark-text underline">
            Info
          </h1>
          <p className="text-base text-light-text dark:text-dark-text">
            Name: {userData.name}
          </p>
          <p className="text-base text-light-text dark:text-dark-text">
            Email: {userData.email}
          </p>
          <p className="text-base text-light-text dark:text-dark-text">
            Account Created: {userData.created}
          </p>
          <br />
        </div>
      </div>
    );
  }

  let reservationContent = "";

  // List user's all reservations
  if (isLoadingRes || isLoadingRooms) {
    reservationContent = <LoadingSpinner />;
  } else if (errorRes || errorRooms) {
    reservationContent = "Something went wrong";
  } else {
    reservationContent = (
      <div className="flex flex-col mt-10 bg-light-bg w-full p-10 divide-y divide-light-text">
        <h1 className="text-4xl text-light-text mb-5">Your Reservations</h1>
        {dataRes.length == 0 && (
          <p className="text-base text-light-text">You have no reservations</p>
        )}
        {dataRes.map((dataRes) => {
          // Find the room that matches the reservation's room_id to get the room's name
          let room = dataRooms.find((room) => room.id === dataRes.room_id);

          // Format start & end dates to be more readable for user
          let startDate = new Date(dataRes.start_date).toLocaleDateString(
            "en-GB",
            {
              weekday: "short",
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }
          );
          let endDate = new Date(dataRes.end_date).toLocaleDateString("en-GB", {
            weekday: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });

          return (
            // Reservation info
            <div key={dataRes.id} className="text-base text-light-text py-5">
              <p>Reservation ID: {dataRes.id}</p>
              <p>Room: {room.title}</p>
              <p>Check In: {startDate}</p>
              <p>Check Out: {endDate}</p>
              <p>Price: {dataRes.price_total} Eur</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col place-items-center min-h-1/2 mx-10">
        <h1 className="text-8xl mt-32 text-light-text dark:text-dark-text text-center">
          Your Profile
        </h1>
      </div>
      {content}

      {reservationContent}
    </div>
  );
};

export default Profilepage;

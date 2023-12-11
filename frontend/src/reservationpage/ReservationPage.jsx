import { useContext, useState } from "react";
import { useQuery } from "react-query";

import { getRooms } from "./api/rooms";
import { AuthContext } from "../context/auth-context";
import RoomList from "./components/RoomList";
import Calendar from "./components/Calendar";
import { LoadingSpinner } from "../components/LoadingSpinner";

// Reservation page for booking rooms
const ReservationPage = () => {
  const auth = useContext(AuthContext);
  // Fetch rooms
  const { isLoading, error, data } = useQuery("rooms", getRooms);

  const [roomPrice, setRoomPrice] = useState(0);
  const [roomId, setRoomId] = useState(null);

  let roomList;

  if (isLoading) {
    roomList = <LoadingSpinner />;
  } else if (error) {
    roomList = <p>Sorry, something went wrong.</p>;
  } else {
    // pass rooms data to RoomList component
    roomList = (
      <RoomList
        rooms={data}
        setRoomPrice={setRoomPrice}
        setRoomId={setRoomId}
      />
    );
  }

  // If user is not logged in, prompt them to login with provided link
  if (!auth.isLoggedIn) {
    return (
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-6xl my-8 mt-28 mb-10">Booking</h1>
        <p className="text-2xl">
          Please{" "}
          <a href="/loginpage" className="text-haven-red underline">
            login
          </a>{" "}
          to book a room.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-6xl my-8 mt-28 mb-10">Booking</h1>
      <div className="flex-grow flex-col md:flex-row flex w-full items-center md:items-start">
        <div className="w-3/4 md:w-1/2 p-4 mt-16 text-center">
          {/* Display calendar for booking */}
          <Calendar roomPrice={roomPrice} roomId={roomId} />
        </div>
        <div className="w-full md:w-1/2 p-4 max-h-screen overflow-y-auto mb-5">
          {/* Display a list of rooms */}
          {roomList}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;

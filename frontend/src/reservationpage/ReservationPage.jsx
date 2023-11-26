import { useState } from "react";
import { useQuery } from "react-query";

import { getRooms } from "./api/rooms";
import RoomList from "./components/RoomList";
import Calendar from "./components/Calendar";
import { LoadingSpinner } from "../components/LoadingSpinner";

const ReservationPage = () => {
  const { isLoading, error, data } = useQuery("rooms", getRooms);

  const [roomPrice, setRoomPrice] = useState(0);

  let roomList;

  if (isLoading) {
    roomList = <LoadingSpinner />;
  } else if (error) {
    roomList = <p>Sorry, something went wrong.</p>;
  } else {
    roomList = <RoomList rooms={data} setRoomPrice={setRoomPrice} />;
  }
  return (
    <div className="container mx-auto flex flex-col items-center min-h-screen">
      <h1 className="text-6xl my-8 mt-28 mb-10">Booking</h1>
      <div className="flex-grow flex w-full">
        <div className="w-1/2 p-4 mt-16">
          <Calendar roomPrice={roomPrice} />
        </div>
        <div className="w-1/2 p-4 max-h-screen overflow-y-auto">{roomList}</div>
      </div>
    </div>
  );
};

export default ReservationPage;

import { useQuery } from "react-query";

import { getRooms } from "./api/rooms";
import RoomList from "./components/RoomList";
import Calendar from "./components/Calendar";
import { LoadingSpinner } from "../components/LoadingSpinner";

const ReservationPage = () => {
  const { isLoading, error, data } = useQuery("rooms", getRooms);

  let roomList;

  if (isLoading) {
    roomList = <LoadingSpinner />;
  } else if (error) {
    roomList = <p>Sorry, something went wrong.</p>;
  } else {
    roomList = <RoomList rooms={data} />;
  }
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-6xl my-8 mt-28 mb-10">Reservation</h1>
      <div className="w-full flex">
        <div className="w-1/2 p-4 mt-16">
          <h2 className="text-lg font-semibold mb-4">reservation rooms lol</h2>
          <Calendar />
        </div>
        <div className="w-1/2 p-4">{roomList}</div>
      </div>
    </div>
  );
};

export default ReservationPage;

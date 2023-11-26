import { useState } from "react";
import RoomItem from "./RoomItem";
const RoomList = ({ rooms, setRoomPrice }) => {
  if (!rooms.length) {
    return <h3>No Rooms Found</h3>;
  }

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setRoomPrice(room.price);
  };

  return (
    <div className="grid">
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => handleRoomSelect(room)}
          className="cursor-pointer p-4"
        >
          <RoomItem
            key={room.id}
            room={room}
            isSelected={selectedRoom === room}
          />
        </div>
      ))}
    </div>
  );
};

export default RoomList;

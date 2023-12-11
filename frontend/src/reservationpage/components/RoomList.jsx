import { useState } from "react";
import RoomItem from "./RoomItem";

// List component for displaying rooms
const RoomList = ({ rooms, setRoomPrice, setRoomId }) => {
  // If no rooms are found, display message
  if (!rooms.length) {
    return <h3>No Rooms Found</h3>;
  }

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setRoomPrice(room.price);
    setRoomId(room.id);
  };

  return (
    <div className="grid">
      {/* Map through rooms and display them */}
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => handleRoomSelect(room)}
          className="cursor-pointer p-4"
        >
          {/* Pass room data to RoomItem component */}
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

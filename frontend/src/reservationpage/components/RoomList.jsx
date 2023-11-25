import RoomItem from "./RoomItem";
const RoomList = ({ rooms }) => {
  if (!rooms.length) {
    return <h3>No Rooms Found</h3>;
  }

  return (
    <div>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;

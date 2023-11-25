const RoomItem = ({ room }) => {
  const roomImage = JSON.parse(room.roomImages);

  return (
    <div>
      <img src={roomImage[0]} />
      <h3>{room.title}</h3>
      <h3>{room.price}</h3>
    </div>
  );
};

export default RoomItem;

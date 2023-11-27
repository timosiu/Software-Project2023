const RoomItem = ({ room, isSelected }) => {
  const roomImage = JSON.parse(room.roomImages);

  return (
    <div
      className={`flex bg-white overflow-hidden shadow-md p-2 ${
        isSelected ? "border border-haven-red  border-2" : ""
      }select-none`}
    >
      <img
        src={roomImage[0]}
        alt={room.title}
        className="w-1/2 h-40 object-cover object-center"
      />
      <div className="flex p-4 pb-0 flex-col">
        <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
        <p className="  text-gray-700">{room.price} €/night</p>
        <a
          href={`/rooms/${room.id}`}
          className="text-haven-red underline mt-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default RoomItem;

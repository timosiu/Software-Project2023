// RoomItem component for displaying room info in reservation page
const RoomItem = ({ room, isSelected }) => {
  // Parse room images from JSON data
  const roomImage = JSON.parse(room.roomImages);

  return (
    <div
      // Display border around selected room
      className={`flex bg-white overflow-hidden shadow-md p-2 ${
        isSelected ? "border-2 border-haven-red" : ""
      } select-none`}
    >
      <img
        src={roomImage[0]}
        alt={room.title}
        className="w-1/2 h-40 object-cover object-center"
      />
      <div className="flex p-4 pb-0 flex-col">
        <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
        <p className="text-gray-700">{room.price} Eur/night</p>
        {/* Link to room's info page */}
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

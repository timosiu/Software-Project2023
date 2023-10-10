const Homepage = () => {
  return (
    <div className="flex flex-col place-items-center bg-gradient-to-br from-sky-500 to-pink-500 h-screen">
      <h1 className="text-8xl mt-32 text-white">Hippy Hotel</h1>
      <h2 className="text-6xl mt-10 text-white">
        Your Portal to Spontanious Travel
      </h2>

      <div className="grid grid-cols-2 mt-20 place-items-center">
        <div className="flex flex-col place-items-center w-1/2">
          <h3 className="text-4xl text-white">Last Minute Accommodations</h3>
          <p className="text-white">
            Find unique, affordable, and last-minute accommodations that
            resonate with your values, whether it's a cozy cabin in the woods or
            an artistic urban loft.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col place-items-center w-1/2">
          <h3 className="text-4xl text-white">Community Vibes</h3>
          <p className="text-white">
            Connect with like-minded travelers and hosts who share your passion
            for authentic, off-the-beaten-path experiences.
          </p>
        </div>
        <div className="flex flex-col place-items-center w-1/2">
          <h3 className="text-4xl text-white">Profiles & Reviews</h3>
          <p className="text-white">
            Detailed user and company profiles with ratings and reviews,
            ensuring transparency and trust among our community members.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col place-items-center w-1/2">
          <h3 className="text-4xl text-white">Search & Book</h3>
          <p className="text-white">
            Our user-friendly search feature lets you discover hidden gems in
            non-touristy areas, even at the eleventh hour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

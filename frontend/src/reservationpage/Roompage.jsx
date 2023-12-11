import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getRoom } from "./api/rooms";
import { getReviews } from "./api/reviews";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { TextCardCenter } from "../components/TextCard";

// Room page for displaying room's info and reviews
const Roompage = () => {
  // Get room id from url
  const { id } = useParams();

  // Fetch room info and reviews
  const { isLoading, error, data } = useQuery(["room", id], () => getRoom(id));
  const {
    isLoading: isLoadingReviews,
    error: errorReviews,
    data: dataReviews,
  } = useQuery(["reviews", id], () => getReviews(id));

  let roomInfo;

  if (isLoading || isLoadingReviews) {
    roomInfo = <LoadingSpinner />;
  } else if (error || errorReviews) {
    roomInfo = <p>Sorry, something went wrong.</p>;
  } else {
    roomInfo = (
      // Display room info: image, name/title, description, price, amenities & reviews
      <div className="flex flex-col place-items-center min-h-screen w-full">
        <div
          className="flex flex-col place-items-center min-h-2/3 mx-10 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${JSON.parse(data.roomImages)[0]})` }}
        >
          <h1 className="text-3xl md:text-4xl mt-96 pb-2 text-gray-50 text-center bg-black bg-opacity-50 w-full">
            {data.title}
          </h1>
        </div>
        <div className="flex flex-col w-full mt-10 justify-center">
          <TextCardCenter title={""} text={data.description} />
          <div className="flex flex-col sm:flex-row w-full bg-light-accent mt-10 justify-center p-5">
            <div className="flex flex-col w-full sm:w-1/2 items-center">
              <p className="py-5 w-3/4 text-center text-light-text text-lg sm:text-left">
                Choose from options such as spa packages for ultimate
                relaxation, outdoor adventure excursions to explore the natural
                surroundings, and gourmet dining experiences that celebrate
                local flavors. Tailor your room preferences to align with your
                vision of a perfect escape, ensuring every detail of your stay
                is curated to perfection.
              </p>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 items-center justify-center">
              <div className="bg-haven-red max-w-3/4 shadow-xl">
                <p className="p-5 text-center text-light-text">
                  Starting at
                  <span className="text-4xl text-light-text font-semibold">
                    {" "}
                    {data.price}{" "}
                  </span>
                  Eur/night
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-2/3 mx-auto mt-10">
            <h1 className="mb-2 text-3xl text-light-text font-semibold">
              Amenities
            </h1>
            <div className="flex flex-row bg-light-accent p-5 justify-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {/* Map through amenities and display them in a list */}
                {JSON.parse(data.amenities).map((amenity) => (
                  <li
                    key={amenity}
                    className="list-disc ml-4 text-lg text-light-text"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-2/3 mx-auto mt-10">
            <h1 className="mb-2 text-3xl text-light-text font-semibold">
              Reviews
            </h1>
            <div className="flex flex-col bg-light-accent p-5 pt-0 justify-center mb-20 divide-y divide-light-text">
              {/* Map through reviews (reviewer's name, profile picture, rating & comment) and display them */}
              {dataReviews.map((review) => (
                <div key={review.id} className="flex flex-col pt-5">
                  <div className="flex flex-col sm:flex-row">
                    {/* Reviewer's info */}
                    <img
                      src={review.user_image}
                      alt="user"
                      className="h-20 w-20 mr-5"
                    />
                    <div className="flex flex-col sm:justify-center">
                      <p className="text-lg text-light-text">
                        {review.user_name}
                      </p>

                      {/* Rating */}
                      <p className="text-lg text-light-text">
                        Rating:{" "}
                        {/* Based on (int)rating value, display corresponding number of filled stars, and empty stars for the rest */}
                        {/* Max rating is 5 stars */}
                        {Array.from({ length: 5 }, (_, index) => (
                          <span key={index}>
                            {index < review.rating ? (
                              // Filled star
                              <span>&#9733;</span>
                            ) : (
                              // Empty star
                              <span>&#9734;</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Review comment */}
                  <p className="text-lg text-light-text mt-3 mb-5">
                    {review.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="items-center">{roomInfo}</div>;
};

export default Roompage;

import React from "react";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";

const CardFack = ({ data }) => {
  // const { id } = useParams();
  const {
    marathon_title,
    start_registration_date,
    end_registration_date,
    marathon_start_date,
    location,
    running_distance,
    description,
    marathon_image,
  } = data;
  return (
    <div>
      <section>
        <div className=" rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform duration-200 transform hover:scale-105">
          {/* Image Section */}
          <img
            className="w-full h-56 object-cover"
            src={marathon_image}
            alt={marathon_title}
          />

          <div className="p-4">
            {/* Marathon Title */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {marathon_title}
            </h2>

            {/* Marathon Dates */}
            <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span>
                Registration: {start_registration_date} -{" "}
                {end_registration_date}
              </span>
            </div>
            <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span>Start Date: {marathon_start_date}</span>
            </div>

            {/* Location Section */}
            <div className="flex items-center mt-3 text-sm text-gray-600 dark:text-gray-400">
              <FaLocationArrow className="mr-2" />
              <span>{location}</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>

            {/* Total Registration Count & Email */}
            <div className="flex justify-between items-center mt-4">
              {/* <span className="text-sm text-gray-600 dark:text-gray-400">
                {total_registration_count} participants
              </span> */}
              <span>Distance: {running_distance}</span>
            </div>
            {/* Footer Section btn see details */}
            {/* <div className=" dark:bg-gray-900 p-4 rounded-b-lg ">
              <Link
                to={`/marathons/${_id}`}
                className="w-full inline-block bg-orange-400 text-white text-center py-2 rounded-lg hover:bg-orange-500 "
              >
                See Details
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardFack;

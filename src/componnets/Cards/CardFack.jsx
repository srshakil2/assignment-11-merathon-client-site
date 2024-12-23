import React from "react";
import { Link } from "react-router-dom";

const CardFack = ({ data }) => {
  const {
    category,
    header,
    img,
    location,
    registration_date,
    registration_end_date,
    time,
    title,
  } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">
          Registration: {registration_date} to {registration_end_date}
        </p>
        <p className="text-sm text-gray-500">Time: {time}</p>
        <p className="text-sm text-gray-500">Categories: {category}</p>
        <div className="card-actions justify-end">
          <Link className="btn bg-orange-400">See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CardFack;

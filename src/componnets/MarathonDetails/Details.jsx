import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Details = () => {
  const [marathon, setMarathon] = useState({});
  const { dataId, setDataId } = useContext(MyMainContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/${dataId}`)
      .then((res) => setMarathon({ ...res?.data }))
      .catch((err) => console.log(err));
  }, [dataId]);
  const {
    _id,
    marathon_title,
    start_registration_date,
    end_registration_date,
    marathon_start_date,
    location,
    running_distance,
    description,
    marathon_image,
    total_registration_count,
  } = marathon || {};

  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold">{marathon_title}</h1>
      <img
        src={marathon.marathon_image}
        alt={marathon.marathon_title}
        className="w-full h-96 content-center rounded-lg"
      />
      <p className="text-lg">{description}</p>
      <div className="space-y-2">
        <div>
          <strong>Start Registration Date:</strong>
          {start_registration_date}
        </div>
        <div>
          <strong>End Registration Date:</strong>
          {end_registration_date}
        </div>
        <div>
          <strong>Marathon Start Date:</strong> {marathon_start_date}
        </div>
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
          <strong>Running Distance:</strong> {running_distance}
        </div>
        <div>
          <strong>Total Registrations:</strong> {total_registration_count}
        </div>
      </div>
      <Link to={`/marathons/register/${_id}`}>
        <button className="btn text-white text-xl bg-orange-400 hover:bg-orange-300 w-full">
          Register for Marathon
        </button>
      </Link>
    </div>
  );
};

export default Details;

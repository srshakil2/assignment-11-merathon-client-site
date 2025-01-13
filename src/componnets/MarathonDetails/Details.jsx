import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import Loding from "../Loding/Loding";
import { Helmet } from "react-helmet";

const Details = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState({});
  const [loding, setLoding] = useState(true);
  const { user } = useContext(MyMainContext);
  useEffect(() => {
    if (loding) {
      <Loding></Loding>;
    }
    if (user) {
      axios
        .get(`http://localhost:3000/data/${id}`)
        .then((res) => {
          setMarathon({ ...res?.data });
          setLoding(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, loding]);
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
      <Helmet>
        <title>Marathon Details</title>
      </Helmet>
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

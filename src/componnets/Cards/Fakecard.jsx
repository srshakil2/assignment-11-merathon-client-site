import React, { useContext, useEffect, useState } from "react";
import CardFack from "./CardFack";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const Fakecard = () => {
  const { themeColor } = useContext(MyMainContext);
  const [fackData, setFackData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFackData([...data]);
      });
  }, []);

  return (
    <div>
      <h2
        className={
          themeColor === "light"
            ? " text-5xl font-bold mb-4"
            : " text-5xl font-bold mb-4 text-white"
        }
      >
        Upcoming Marathons<span className="text-orange-400">...</span>
      </h2>
      <h3
        className={
          themeColor === "light"
            ? "text-5xl font-bold"
            : "text-5xl font-bold text-white"
        }
      >
        Join Our <span className=" bg-orange-300 ">Marathon</span> Community.
      </h3>
      <p
        className={
          themeColor === "light"
            ? " font-semibold mt-5"
            : " font-semibold mt-5 text-white"
        }
      >
        Join us for events that motivate, inspire, and build lasting friendships
        on the track and trails.
      </p>
      {/* fake data to card  */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl mt-5">
        {fackData?.map((data) => (
          <CardFack key={data._id} data={data}></CardFack>
        ))}
      </div>
    </div>
  );
};

export default Fakecard;

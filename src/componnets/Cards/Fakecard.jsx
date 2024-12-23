import React, { useEffect, useState } from "react";
import CardFack from "./CardFack";

const Fakecard = () => {
  const [fackData, setFackData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((res) => setFackData([...res]));
  }, []);

  return (
    <div>
      <p className=" text-lg font-semibold">Community Event</p>
      <h3 className=" text-5xl font-bold">
        Join Our <span className=" bg-orange-300">Marathon</span> Community.
      </h3>
      <p className=" font-semibold">
        Join us for events that motivate, inspire, and build lasting friendships
        on the track and trails.
      </p>
      {/* fake data to card  */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 bg-violet-50 p-10 rounded-xl">
        {fackData.map((data) => (
          <CardFack key={data.id} data={data}></CardFack>
        ))}
      </div>
    </div>
  );
};

export default Fakecard;

import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MarathonCard from "./MarathonCard";
import Loding from "../Loding/Loding";

const Marathons = () => {
  const [loding, setLoding] = useState(true);
  const [data, setData] = useState([]);
  const { user } = useContext(MyMainContext);
  useEffect(() => {
    if (loding) {
      <Loding></Loding>;
    }
    if (user) {
      axios.get("http://localhost:3000/data").then(async (res) => {
        const marathonData = await res.data;
        setData([...marathonData]);
        setLoding(false);
      });
    }
  }, [user, loding]);

  return (
    <div>
      {/* bannaer */}
      <div>
        <div className=" h-[200px] md:h-[300px] lg:h-[400px]">
          <img
            className=" w-full h-full"
            src="https://i.ibb.co.com/dmqfnD9/istockphoto-892658004-612x612.jpg"
            alt=""
          />
        </div>
        <div className="mt-8">
          <h2 className="uppercase text-center text-4xl font-bold">
            all marathons
          </h2>
          <p className="text-center text-lg font-semibold mt-5">
            A 3km race is a short, fast-paced run, ideal for beginners or speed
            enthusiasts. The 10km offers a moderate challenge, requiring stamina
            and strategy. Longer distances like 25km and 30km demand endurance,
            mental strength, and proper training, bridging the gap between
            shorter races and marathons.
          </p>
        </div>
      </div>
      {/* search by km */}
      {/* card for mongodb */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-5">
        {data.map((item, index) => (
          <MarathonCard key={index} item={item}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

export default Marathons;

import React, { useEffect, useState } from "react";
import Bannerm from "./Bannerm";
import axios from "axios";
import MarathonCard from "./MarathonCard";

const MarathonPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <section>
        <Bannerm></Bannerm>
      </section>
      {/* comming soon */}
      <section>
        <div className=" flex items-center gap-5">
          <h5 className=" text-xl font-bold">COMING SOON</h5>
          <div className="flex items-center justify-center w-[70px]">
            <img
              src="https://img.icons8.com/?size=80&id=CuY5nbxzD8bo&format=png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* card DB */}
      <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 mt-7">
        {data.map((item) => (
          <MarathonCard key={item._id} item={item}></MarathonCard>
        ))}
      </section>
    </div>
  );
};

export default MarathonPage;

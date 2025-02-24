import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MarathonCard from "./MarathonCard";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const MarathonPage = () => {
  const [sortValu, setSortValu] = useState("");
  const [data, setData] = useState([]);
  const { themeColor } = useContext(MyMainContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setSortValu(value);
  };

  useEffect(() => {
    axios
      .get("https://y-jade-phi-87.vercel.app/sixData")
      .then((res) => {
        if (sortValu === "Ascending") {
          const assnding = res.data.sort((a, b) => {
            const distanceA = parseInt(a.running_distance);
            const distanceB = parseInt(b.running_distance);
            return distanceA - distanceB;
          });
          setData(assnding);
        } else if (sortValu === "Descending") {
          const dssnding = res.data.sort((a, b) => {
            const distanceAa = parseInt(a.running_distance);
            const distanceBb = parseInt(b.running_distance);
            return distanceBb - distanceAa;
          });
          setData(dssnding);
        } else {
          return setData(res.data);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  }, [data]);

  return (
    <div>
      {/* comming soon */}
      <section
        className={
          themeColor === "light"
            ? "flex items-center justify-center mb-4"
            : "flex items-center justify-center mb-4 text-white"
        }
      >
        <div className=" md:flex items-center gap-5">
          <div className=" flex items-center">
            <h5 className=" text-xl font-bold">COMING SOON</h5>
            <div className="flex items-center justify-center w-[70px]">
              <img
                src="https://img.icons8.com/?size=80&id=CuY5nbxzD8bo&format=png"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <h4 className="text-nowrap text-xl font-bold">Sort by Km</h4>
            <select
              value={sortValu}
              onChange={handleChange}
              name="selected"
              className="select select-bordered w-full max-w-xs"
            >
              <option value={""}>Defult</option>
              <option value={"Ascending"}>Ascending</option>
              <option value={"Descending"}>Descending</option>
            </select>
          </div>
        </div>
      </section>
      {/* card DB */}
      <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <MarathonCard key={item._id} item={item}></MarathonCard>
        ))}
      </section>
    </div>
  );
};

export default MarathonPage;

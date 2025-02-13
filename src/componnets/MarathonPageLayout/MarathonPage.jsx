import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MarathonCard from "./MarathonCard";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const MarathonPage = () => {
  const [data, setData] = useState([]);
  const { themeColor } = useContext(MyMainContext);

  useEffect(() => {
    axios
      .get("https://y-jade-phi-87.vercel.app/sixData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

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
      <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <MarathonCard key={item._id} item={item}></MarathonCard>
        ))}
      </section>
    </div>
  );
};

export default MarathonPage;

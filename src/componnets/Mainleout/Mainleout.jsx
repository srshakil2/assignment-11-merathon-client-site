import React from "react";
import Homebanner from "../Banner/Homebanner";

const Mainleout = () => {
  return (
    <div className="">
      <div>
        <Homebanner></Homebanner>
      </div>
      <div className=" w-9/12 mx-auto mt-10 grid grid-cols-3">
        <div className=" col-span-2">
          <p className="text-4xl font-bold">Starts Mileblast Marathon 2025</p>
          <div>{/* aikhane animation korte hobe */}</div>
        </div>
        <div className=" col-span-1 space-y-4">
          <div className=" flex gap-5 items-center">
            <div className="w-12">
              <img
                className="w-full btn-circle border-2 p-2"
                src="https://img.icons8.com/?size=32&id=9lEnd3Zchg1S&format=png"
                alt=""
              />
            </div>
            <p className="text-lg font-semibold">End of March 06, 2025</p>
          </div>
          <div className=" flex gap-5 items-center">
            <div className="w-12">
              <img
                className="w-full btn-circle border-2 "
                src="https://img.icons8.com/?size=48&id=HLsVIJtJGbew&format=png"
                alt=""
              />
            </div>
            <p className="text-lg font-semibold">Dhaka , Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainleout;

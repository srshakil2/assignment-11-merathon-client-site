import React from "react";
import Homebanner from "../Banner/Homebanner";
import Fakecard from "../Cards/Fakecard";
import { NavLink } from "react-router-dom";

const Mainleout = () => {
  return (
    <div className="">
      <div className=" relative ">
        <div>
          <Homebanner></Homebanner>
        </div>
        {/* down Marathon Category */}
        <div className="flex items-center gap-2 absolute md:right-10 md:bottom-6 lg:bottom-10 lg:right-10">
          <p className="text-lg font-bold">Marathon Category</p>
          <div className="w-10">
            <button>
              <img
                src="https://img.icons8.com/?size=48&id=XZh4vkhZnXtg&format=png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      {/* animation */}
      <div className="bg-bg bg-repeat-round text-orange-500 w-9/12 p-5 mx-auto mt-10 mb-5 md:grid lg:grid grid-cols-3">
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
      {/* peragrap and btn create now */}
      <div className="text-center w-10/12 mx-auto mt-10">
        <p className=" font-semibold">Create !</p>
        <h2 className="text-3xl font-bold">Buy Your Early Bird Create Now!</h2>
        <p className="text-lg font-semibold">
          Take advantage of our early bird pricing and save on your marathon
          Create! Enjoy the benefits of registering early while guaranteeing
          your participation.
        </p>
        {/* btn Create now */}
        <div className="mt-5">
          <NavLink className="btn bg-orange-400">CREATE NOW</NavLink>
        </div>
      </div>
      {/* user upcoming card */}
      <div className="">
        <h2 className=" text-5xl font-bold">Upcoming Marathons....</h2>
        <div className=" p-10">{/* mongo DB card */}</div>
      </div>
      {/* Fakecard */}
      <div className="mt-10">
        <Fakecard></Fakecard>
      </div>
    </div>
  );
};

export default Mainleout;

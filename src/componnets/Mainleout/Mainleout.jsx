// import React, { useContext } from "react";
import Homebanner from "../Banner/Homebanner";
// import Fakecard from "../Cards/Fakecard";
import { NavLink } from "react-router-dom";
import MarathonPage from "../MarathonPageLayout/MarathonPage";
import Fakecard from "../Cards/Fakecard";
import Homesection from "../Sections/Homesection";
import { Helmet } from "react-helmet";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
// import { MyMainContext } from "../../AuthProvider/AuthProvider";

const Mainleout = () => {
  const { themeColor } = useContext(MyMainContext);
  return (
    <div className="">
      <Helmet>
        <title>Marathon Home</title>
      </Helmet>

      <div>
        <Homebanner></Homebanner>
      </div>

      {/* animation */}
      <div className="px-5 mt-14">
        <div className="bg-bg bg-repeat-round text-orange-500 p-5  md:grid lg:grid grid-cols-3">
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
      {/* peragrap and btn create now */}

      <div
        className={
          themeColor === "light"
            ? "text-center mt-10 px-5"
            : " text-white text-center mt-10 px-5"
        }
      >
        <p className=" font-semibold">Create !</p>
        <h2 className="text-3xl font-bold">Buy Your Early Bird Create Now!</h2>
        <p className="text-lg font-semibold">
          Take advantage of our early bird pricing and save on your marathon
          Create! Enjoy the benefits of registering early while guaranteeing
          your participation.
        </p>
        {/* btn Create now */}
        <div className="mt-5">
          <NavLink
            to={"/addmarathon"}
            className={
              themeColor === "light"
                ? "btn bg-orange-400 uppercase"
                : "btn text-white bg-orange-400 uppercase"
            }
          >
            Add marathons
          </NavLink>
        </div>
      </div>

      {/* Marathon page */}
      <div className="mt-10 px-5">
        <MarathonPage></MarathonPage>
      </div>
      {/* facke card */}
      <div className="px-5 mt-10">
        <Fakecard></Fakecard>
      </div>
      <div className="mb-10 px-5 mt-10">
        <Homesection></Homesection>
      </div>
    </div>
  );
};

export default Mainleout;

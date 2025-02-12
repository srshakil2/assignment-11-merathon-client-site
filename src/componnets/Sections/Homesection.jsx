import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const Homesection = () => {
  const { themeColor } = useContext(MyMainContext);
  return (
    <div className={themeColor === "light" ? "" : "text-white"}>
      <div className=" text-center space-y-5 mb-10">
        <p className="text-lg font-semibold uppercase">Explore Category</p>
        <h3 className=" uppercase text-5xl font-bold">
          Races For <span className="bg-orange-300">Beginners</span> To{" "}
          <span className="bg-orange-300">Marathoners</span>.
        </h3>
        <p className="text-xl font-semibold">
          Enjoy various races, from easy short distances to tough marathons.
        </p>
      </div>
      <div className="w-full xl:grid xl:grid-cols-3 xl:justify-start xl:items-start gap-5">
        <div className="bg-bgsc bg-repeat-round h-full xl:col-span-2">
          <div className=" flex items-center justify-center w-full">
            <img
              src="https://i.ibb.co.com/hfbjT2Z/heroic-double-exposure-colorful-photo-well-trained-male-hispanic-runner-speedy-running-31965-131961.jpg"
              alt=""
              className="p-10 opacity-80 w-full"
            />
            <div className=" opacity-50">{/*  */}</div>
          </div>
          <div className=" px-12 space-y-10 pb-10">
            <h3 className=" uppercase text-4xl font-bold text-center">
              25 Km Full Marathon
            </h3>
            <div className=" flex items-center justify-between">
              <div className=" font-bold text-xl space-y-4">
                <p>4,500 of 5,000</p>
                <p>Registered Runners</p>
              </div>
              <div>
                <NavLink
                  to={"/addmarathon"}
                  className={
                    themeColor === "light"
                      ? "btn bg-orange-400 uppercase"
                      : "btn text-white bg-orange-400 uppercase"
                  }
                >
                  Add marathons !
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* left */}
        <div className=" space-y-5 xl:col-span-1 xl:mt-0 lg:mt-5 md:mt-5 mt-5">
          {/*  */}
          <div className="bg-bgsc bg-repeat-round p-5 flex gap-5  ">
            <div className="flex items-center justify-center w-full ">
              <img
                src="https://i.ibb.co.com/Qck02rv/istockphoto-184839421-612x612.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div>
              <h4 className=" text-2xl font-bold uppercase text-center mb-10">
                10 Km Half Marathon
              </h4>
              <div className=" flex justify-between">
                <div>
                  <p className=" font-semibold">3,700 of 5,000</p>
                  <p>Registered Runners</p>
                </div>
                <div>
                  <NavLink
                    to={"/addmarathon"}
                    className={
                      themeColor === "light"
                        ? "btn bg-orange-400 uppercase"
                        : "btn bg-orange-400 uppercase text-white"
                    }
                  >
                    Add marathons !
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-bgsc bg-repeat-round p-5 flex gap-5">
            <div className="flex items-center justify-center w-full">
              <img
                src="https://i.ibb.co.com/Qck02rv/istockphoto-184839421-612x612.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div>
              <h4 className=" text-2xl font-bold uppercase text-center mb-10">
                10 Km Half Marathon
              </h4>
              <div className=" flex justify-between">
                <div>
                  <p className=" font-semibold">3,700 of 5,000</p>
                  <p>Registered Runners</p>
                </div>
                <div>
                  <NavLink
                    to={"/addmarathon"}
                    className={
                      themeColor === "light"
                        ? "btn bg-orange-400 uppercase"
                        : "btn bg-orange-400 uppercase text-white"
                    }
                  >
                    Add marathons !
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-bgsc bg-repeat-round p-5 flex gap-5">
            <div className="flex items-center justify-center w-full">
              <img
                src="https://i.ibb.co.com/Qck02rv/istockphoto-184839421-612x612.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div>
              <h4 className=" text-2xl font-bold uppercase text-center mb-10">
                10 Km Half Marathon
              </h4>
              <div className=" flex justify-between">
                <div>
                  <p className=" font-semibold">3,700 of 5,000</p>
                  <p>Registered Runners</p>
                </div>
                <div>
                  <NavLink
                    to={"/addmarathon"}
                    className={
                      themeColor === "light"
                        ? "btn bg-orange-400 uppercase"
                        : "btn bg-orange-400 uppercase text-white"
                    }
                  >
                    Add marathons !
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesection;

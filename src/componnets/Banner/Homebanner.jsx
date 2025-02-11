import React from "react";
import { NavLink } from "react-router-dom";

const Homebanner = () => {
  return (
    <div className="">
      {/* Banner silder */}
      {/* md:h-[300px] lg:h-[400px] opacity-95 */}
      <div className="z-10 carousel w-full md:h-[300px] lg:h-[400px] opacity-95">
        <div id="slide1" className="carousel-item relative w-full object-fill">
          <img
            src="https://i.ibb.co.com/R7jD6vg/healthy-lifestyle-running-outdoors-23-2151847285.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className=""></a>
            <a href="#slide2" className=""></a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full object-fill">
          <img
            src="https://i.ibb.co.com/dcrRhKK/healthy-lifestyle-running-outdoors-23-2151847298.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className=""></a>
            <a href="#slide3" className=""></a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full object-fill">
          <img
            src="https://i.ibb.co.com/fqkg4M5/young-fitness-woman-runner-1150-10577.jpg"
            className="w-full object-fill"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className=""></a>
            <a href="#slide1" className=""></a>
          </div>
        </div>
      </div>
      {/* Home text */}
      <div className=" px-5 mt-10 relative">
        <div className="space-y-4">
          <h5 className="text-lg font-bold">Mileblast Marathon 2025</h5>
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold space-y-5">
            <p>
              Join The <span className="bg-orange-300">Race</span>,
            </p>
            <p>
              Push Your <span className="bg-orange-300">Limits.</span>
            </p>
          </h1>
          <p className="text-lg font-semibold">
            Mileblast Marathon 2025 is more than just a test of endurance <br />
            —it’s a celebration of human determination and resilience.
          </p>
          {/* create now btn */}
          <div>
            <NavLink
              to={"/addmarathon"}
              className="btn bg-orange-400 text-xl uppercase"
            >
              Add marathons !
            </NavLink>
          </div>
        </div>
        <div className=" flex items-center gap-2 absolute md:right-5 md:bottom-0 ">
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
    </div>
  );
};

export default Homebanner;

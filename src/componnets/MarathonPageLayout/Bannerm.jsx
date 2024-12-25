import React from "react";

const Bannerm = () => {
  return (
    <div>
      <section>
        <h2 className="md:w-6/12 mx-auto text-center text-2xl md:text-4xl font-bold mt-5">
          Sydney to Become <br /> Seventh World{" "}
          <span className="bg-orange-200">Major</span> Marathon in 2025
        </h2>
        <p className="w-6/12 mx-auto text-center text-lg font-semibold">
          The Sydney Marathon has joined the ranks of New York, Boston, Chicago,
          London, Berlin and Tokyo, receiving a designation reserved for the
          most elite races in the world.
        </p>
      </section>
      {/* animation */}
      <section className="">
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
      </section>
    </div>
  );
};

export default Bannerm;

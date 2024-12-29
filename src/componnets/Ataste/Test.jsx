import React from "react";

const Test = () => {
  return (
    <div>
      {/* form er vitorer onso */}
      <section>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input
            readOnly
            type="text"
            name="email"
            value={item?.email}
            className="input input-bordered text-gray-400"
          />
        </div>
        {/* marathon titel */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Marathon Titel
            </span>
          </label>
          <input
            readOnly
            type="text"
            value={item?.marathon_titel}
            name="titel"
            className="input input-bordered text-gray-400"
          />
        </div>
        {/* regiter date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Registration Date
            </span>
          </label>
          <input
            readOnly
            type="text"
            name="registerDate"
            value={item?.register_date}
            className="input input-bordered text-gray-400"
          />
        </div>
        {/* frist name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            defaultValue={item?.firstName}
            className="input input-bordered"
          />
        </div>
        {/* last name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Last Name</span>
          </label>
          <input
            type="text"
            name="last_name"
            defaultValue={item?.lastName}
            className="input input-bordered"
          />
        </div>
        {/* contact number */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Contact</span>
          </label>
          <input
            type="number"
            name="contact"
            defaultValue={item?.contact}
            className="input input-bordered"
          />
        </div>
        {/* info */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Enter or Info
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            defaultValue={item?.info}
            name="info"
          ></textarea>
        </div>
        {/* btn submit */}
        <button
          type="submit"
          className="btn text-white text-xl  bg-orange-400 hover:bg-orange-300"
        >
          Update Now
        </button>
      </section>
    </div>
  );
};

export default Test;

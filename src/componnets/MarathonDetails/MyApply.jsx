import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const MyApply = () => {
  const [participentEvent, setParticipentEvent] = useState([]);
  const { user } = useContext(MyMainContext);
  console.log(user?.email);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/participer/${user?.email}`)
      .then((res) => setParticipentEvent(res.data))
      .catch((err) => {
        // console.log(err?.massage)
      });
  }, [user]);

  const handelUpdate = (_id) => {
    event.preventDefault();
    console.log(_id, "update info");
  };
  const handelDelete = (_id) => {
    console.log(_id, "this is delete");
  };

  return (
    <div className="overflow-x-auto h-screen mt-10">
      {/* register user marathon list */}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Marathon</th>
            <th>Update & Delete</th>
          </tr>
        </thead>
        {participentEvent.map((item, i) => (
          <tbody key={i}>
            {/* row 1 */}
            <tr>
              <th>{i + 1}</th>
              <td>{item?.firstName}</td>
              <td>{item?.marathon_titel}</td>
              <tr>
                <button
                  onClick={() => document.getElementById(item?._id).showModal()}
                  className="btn mr-2 mb-1 text-orange-700 bg-blue-200"
                >
                  Update
                </button>
                <button
                  onClick={() => handelDelete(item?._id)}
                  className="btn mb-1 bg-orange-200 text-red-800"
                >
                  Delete
                </button>
              </tr>
            </tr>

            {/* modal Update for uniq id */}
            <dialog id={`${item?._id}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h1 className="text-2xl font-extrabold p-5">Update Info</h1>
                <form
                  onSubmit={() => handelUpdate(item?._id)}
                  className="card-body grid md:grid-cols-2 gap-5"
                >
                  {/* email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      // value={user_email}
                      className="input input-bordered"
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
                      type="text"
                      // value={marathon_title}
                      name="titel"
                      className="input input-bordered"
                    />
                  </div>
                  {/* start date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        Start Date
                      </span>
                    </label>
                    <input
                      type="text"
                      name="start_date"
                      // value={marathon_start_date}
                      className="input input-bordered"
                    />
                  </div>
                  {/* frist name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Enter Your First Name"
                      className="input input-bordered"
                    />
                  </div>
                  {/* last name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Enter Your Last Name"
                      className="input input-bordered"
                    />
                  </div>
                  {/* contact number */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">
                        Contact
                      </span>
                    </label>
                    <input
                      type="number"
                      name="contact"
                      placeholder="Enter Your Contact Number"
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
                      placeholder="Enter Info"
                      name="info"
                    ></textarea>
                  </div>
                  {/* btn */}
                  <br />
                  <div className="form-control mt-6 md:col-span-2">
                    <button
                      className="btn text-white text-xl  bg-orange-400 hover:bg-orange-300"
                      type="submit"
                    >
                      Update Now
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            {/*  */}
            {/* delete for modal uniq id */}

            {/*  */}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyApply;

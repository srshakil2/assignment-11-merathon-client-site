import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Swal from "sweetalert2";

const MyApply = () => {
  const [participentEvent, setParticipentEvent] = useState([]);

  // dasiyUI ulternativ
  let [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(MyMainContext);
  // console.log(user?.email);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/participer/${user?.email}`)
      .then((res) => setParticipentEvent(res.data))
      .catch((err) => {
        // console.log(err?.massage)
      });
  }, [user, participentEvent]);

  const handelUpdate = (e, _id) => {
    e.preventDefault();

    console.log(_id, "update info");

    //
    //
    const form = e.target;
    const email = form.email.value;
    const marathon_titel = form.titel.value;
    const register_date = form.registerDate.value;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const contact = form.contact.value;
    const info = form.info.value;

    //
    axios
      .post(`http://localhost:3000/participer/${_id}`, {
        id: _id,
        firstName: firstName,
        lastName: lastName,
        contact: contact,
        info: info,
      })
      .then((res) => {
        setIsOpen(false);
        if (res?.data?.modifiedCount === 1) {
          Swal.fire({
            title: "Update succes!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => console.log(err.message));

    //
    // document.getElementById(`${_id}`).classList.remove("hedden");
    // ei khan thke soru korbo
  };
  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/participer/${_id}`, { _id })
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err.massage, "deletvfvsdf"));
      }
    });
    console.log(_id, "this is delete");
  };
  // console.log(participentEvent);
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
                {/* update btn table */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn mr-2 mb-1 text-orange-700 bg-blue-200"
                >
                  Update
                </button>
                {/* delete btn table */}
                <button
                  onClick={() => handelDelete(item?._id)}
                  className="btn mb-1 bg-orange-200 text-red-800"
                >
                  Delete
                </button>
              </tr>
            </tr>

            {/* modal Update for uniq id */}
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 flex justify-center pt-24 mt-1 mb-10 ">
                <DialogPanel className=" shadow-lg rounded-xl bg-white p-12 ">
                  <form
                    onSubmit={(e) => handelUpdate(e, item?._id)}
                    className=" grid grid-cols-2 md:grid-cols-3 gap-5"
                  >
                    {/* form data */}
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-lg font-semibold">
                          Email
                        </span>
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
                        <span className="label-text text-lg font-semibold">
                          First Name
                        </span>
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
                        <span className="label-text text-lg font-semibold">
                          Last Name
                        </span>
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
                        <span className="label-text text-lg font-semibold">
                          Contact
                        </span>
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
                    {/* btn form submit */}
                    <div className="flex gap-4 items-center justify-center mt-5">
                      <button
                        type="submit"
                        // onClick={() => setIsOpen(false)}
                        className="btn text-white text-xl  bg-orange-400 hover:bg-orange-300"
                      >
                        Update Now
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </div>
            </Dialog>
            {/*  */}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyApply;

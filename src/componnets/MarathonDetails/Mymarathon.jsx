import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { Dialog, DialogPanel } from "@headlessui/react";
import Swal from "sweetalert2";
import Loding from "../Loding/Loding";
import { Helmet } from "react-helmet";

const Mymarathon = () => {
  // dasiyUI ulternativ
  const [loopRunning, setLoopRunning] = useState(true);
  const [loding, setLoding] = useState(true);
  const [singelData, setSingelData] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const [addMarathon, setAddMarathon] = useState([]);
  const { user } = useContext(MyMainContext);
  const email = user?.email;

  useEffect(() => {
    if (!loding) {
      <Loding></Loding>;
    }
    if (email) {
      axios
        .get(`https://y-jade-phi-87.vercel.app/data/singeldata/${email}`, {
          email,
        })
        .then((res) => {
          setLoding(false);
          setAddMarathon(res.data);
          if (loopRunning) {
            setLoopRunning(false);
          }
        })
        .catch((err) => {
          // console.log(err?.massage)
        });
    }
  }, [loopRunning, email, loding]);
  // update fn done
  const handelUpdateData = (id) => {
    axios
      .get(`https://y-jade-phi-87.vercel.app/data/${id}`, { id })
      .then((res) => {
        setSingelData({ ...res.data });
        setIsOpen(true);
      })
      .catch((err) => {});
  };
  // done
  const updateData = (e, _id) => {
    e.preventDefault();
    const form = e.target;
    const id = _id;
    const email = form.email.value;
    const marathon_title = form.marathon_title.value;
    const marathon_image = form.marathon_image.value;
    const location = form.location.value;
    const start_registration_date = form.start_registration_date.value;
    const end_registration_date = form.end_registration_date.value;
    const description = form.description.value;
    axios
      .patch(`https://y-jade-phi-87.vercel.app/data/upDate/${id}`, {
        id,
        email,
        marathon_title,
        marathon_image,
        location,
        start_registration_date,
        end_registration_date,
        description,
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data Update Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setIsOpen(false);
        setLoopRunning(true);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // done
  const handelDelete = (_id) => {
    const id = _id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://y-jade-phi-87.vercel.app/data/deleteOne/${id}`, {
            id,
          })
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setIsOpen(false);
            setLoopRunning(true);
          })
          .catch((err) => {
            // console.log(err)
          });
      }
    });
  };
  // console.log(addMarathon.length);
  return (
    <div className="overflow-x-hidden h-screen mt-10 ml-5">
      <Helmet>
        <title>MyMarathon</title>
      </Helmet>
      {/* register user marathon list */}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>

            <th>Distancel (km)</th>
            <th>Action</th>
          </tr>
        </thead>
        {addMarathon.map((item, i) => (
          <tbody key={i}>
            {/* row 1 */}
            <tr>
              {/* img */}
              <td>
                <div className="flex items-center ">
                  <div className="avatar">
                    <div className="mask mask-squircle h-10 w-10">
                      <img
                        src={item?.marathon_image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              {/*  */}
              <td>{item?.marathon_title}</td>

              <td>{item?.running_distance} </td>
              <tr>
                {/* update btn table */}
                <button
                  onClick={() => handelUpdateData(item._id)}
                  className="mt-2 btn  mb-1 text-orange-700 bg-blue-200"
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
            {/* modal */}
          </tbody>
        ))}
      </table>
      <div>
        {/* modal Update for uniq id */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex justify-center pt-24 mt-1  overflow-y-auto ">
            <DialogPanel className=" shadow-lg rounded-xl bg-white p-12 ">
              <h2 className="text-2xl font-bold mb-6 text-center uppercase">
                Update Marathon Form
              </h2>
              <form
                onSubmit={(e) => updateData(e, singelData?._id)}
                className=" grid grid-cols-2 md:grid-cols-3 gap-5"
              >
                {/* email */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={singelData?.email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly
                  />
                </div>
                {/*  Marathon Title */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Marathon Title
                  </label>
                  <input
                    type="text"
                    name="marathon_title"
                    defaultValue={singelData?.marathon_title}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {/* Marathon Image */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Marathon Image
                  </label>
                  <input
                    type="text"
                    name="marathon_image"
                    defaultValue={singelData?.marathon_image}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {/* Location */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={singelData?.location}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {/* Start Registration Date */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Start Registration Date
                  </label>
                  <input
                    type="date"
                    name="start_registration_date"
                    defaultValue={singelData?.start_registration_date}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                {/* End Registration Date */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    End Registration Date
                  </label>
                  <input
                    type="date"
                    name="end_registration_date"
                    defaultValue={singelData?.end_registration_date}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                {/* Description */}
                <div className="mb-4 col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={singelData?.description}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
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
      </div>
    </div>
  );
};

export default Mymarathon;

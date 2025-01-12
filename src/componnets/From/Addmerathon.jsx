import axios from "axios";
import { format } from "date-fns";
import { useContext } from "react";
import { FaRunning } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyMainContext } from "../../AuthProvider/AuthProvider";

const Addmerathon = () => {
  const navigate = useNavigate();
  const { user } = useContext(MyMainContext);
  const hamdelAddMarathon = (e) => {
    e.preventDefault();
    const form = e.target;
    const marathon_title = form.marathon_title.value;
    const start_registration_date = form.start_registration_date.value;
    const end_registration_date = form.end_registration_date.value;
    const marathon_start_date = form.marathon_start_date.value;
    const location = form.location.value;
    const running_distance = form.running_distance.value;
    const description = form.description.value;
    const marathon_image = form.marathon_image.value;
    const created = format(new Date(), "MM/dd/yyyy");
    const created_at = new Date(created);
    const total_registration_count = 0;
    const email = form.email.value;

    //
    // console.table({
    //   marathon_title,
    //   start_registration_date,
    //   end_registration_date,
    //   marathon_start_date,
    //   location,
    //   running_distance,
    //   description,
    //   marathon_image,
    //   created_at,
    //   total_registration_count,
    //   email,
    // });
    axios
      .post("http://localhost:3000/data", {
        marathon_title,
        start_registration_date,
        end_registration_date,
        marathon_start_date,
        location,
        running_distance,
        description,
        marathon_image,
        created_at,
        total_registration_count,
        email,
      })
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Addmarathon Done",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((err) => {
        // console.log("error massage for: ", err)
      });
  };
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10">
      <form
        onSubmit={(e) => hamdelAddMarathon(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full md:w-9/12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center uppercase">
          Add Marathon Form
        </h2>
        {/* email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            value={user?.email}
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/*  Running Distance */}
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="running_distance"
          >
            Running Distance (in km)
          </label>
          <div className="flex items-center border rounded shadow appearance-none w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline">
            <select
              name="running_distance"
              className="flex-grow focus:outline-none"
              required
            >
              <option value="" disabled>
                Select Distance
              </option>
              <option value="25">25 km</option>
              <option value="10">10 km</option>
              <option value="3">3 km</option>
            </select>
            <FaRunning className="ml-2 text-orange-400" />
          </div>
        </div>
        {/* Start Registration Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Registration Date
          </label>
          <input
            type="date"
            name="start_registration_date"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Marathon Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Marathon Start Date
          </label>
          <input
            type="date"
            name="marathon_start_date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        {/* submit btn */}
        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addmerathon;

import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { user, dataId } = useContext(MyMainContext);
  const user_email = user?.email;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/${id}`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  const {
    _id,
    email,
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
  } = data || {};
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const marathon_titel = form.titel.value;
    const register_date = format(new Date(), "MM/dd/yyyy");
    const end_date = format(new Date(end_registration_date), "MM/dd/yyyy");
    // compear date
    const userDate = new Date(register_date);
    const endDate = new Date(end_date);
    if (userDate.getTime() > endDate.getTime()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The Date is Expeair!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const contact = form.contact.value;
    const info = form.info.value;

    if (!data?.register_email || user?.email !== data?.register_email) {
      axios
        .post("http://localhost:3000/participer", {
          email,
          marathon_titel,
          firstName,
          lastName,
          contact,
          info,
          register_date,
        })
        .then((res) => {
          // update tha total count
          axios
            .post(`http://localhost:3000/data/${_id}`, {
              email,
              _id,
            })
            .then((res) => {
              Swal.fire("Register!", "", "success");
              form.reset();
              navigate("/marathons/myApply");
            })
            .catch((err) => {
              // console.log(err)
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "You Have Allrady axsist...",
        text: "pleas wate next year this marathon!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    // console.log(register_date);
    // send data to server
  };
  return (
    <div>
      <Helmet>
        <title>Registration Marathon</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold p-5">Register To,</h1>
      <p className="p-5 font-semibold text-lg">
        Furthermore, he said that the marathon is expected to generate many
        benefits for Dhaka, promoting the city’s sporting resources, as well as
        having a positive economic impact on local hotels, restaurants,
        airlines, transportation providers, and other commercial entities.
      </p>
      <form
        onSubmit={handelSubmit}
        className="card-body grid md:grid-cols-2 gap-5"
      >
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input
            type="text"
            name="email"
            value={user_email}
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
            value={marathon_title}
            name="titel"
            className="input input-bordered"
          />
        </div>
        {/* start date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Start Date</span>
          </label>
          <input
            type="text"
            name="start_date"
            value={marathon_start_date}
            className="input input-bordered"
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
            placeholder="Enter Your First Name"
            className="input input-bordered"
            required
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
            placeholder="Enter Your Last Name"
            className="input input-bordered"
            required
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
            placeholder="Enter Your Contact Number"
            className="input input-bordered"
            required
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
            required
          ></textarea>
        </div>
        {/* btn */}
        <br />
        <div className="form-control mt-6 md:col-span-2">
          <button
            className="btn text-white text-xl  bg-orange-400 hover:bg-orange-300"
            type="submit"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

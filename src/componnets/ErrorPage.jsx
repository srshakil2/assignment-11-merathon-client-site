import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handelHomePage = () => {
    navigate("/");
  };
  return (
    <div className="space-y-7 mt-12">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">404</h4>
        <p className="text-center text-lg font-semibold mt-4">
          Not Availablle Page! please Go Back Home
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handelHomePage}
          className="btn bg-yellow-400 text-xl font-bold"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

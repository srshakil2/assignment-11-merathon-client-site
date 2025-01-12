import { useContext } from "react";
import { MyMainContext } from "../AuthProvider/AuthProvider";
import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const { name } = useContext(MyMainContext);

  return (
    <div className="relative ">
      {/* <div className="w-20">
        <img
          src="https://image.shutterstock.com/image-vector/vector-template-colored-emotions-strips-260nw-636671227.jpg"
          alt=""
        />
      </div> */}
      {/* Navber */}
      <div className=" sticky top-0 opacity-95 z-30 ">
        <Navber></Navber>
      </div>
      {/* Outlet */}
      {/* w-11/12 md:w-11/12 mx-auto */}
      <div className="">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

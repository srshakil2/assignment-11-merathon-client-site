import { useContext } from "react";
import { MyMainContext } from "../AuthProvider/AuthProvider";
import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const { name } = useContext(MyMainContext);
  console.log(name);
  return (
    <div className="">
      {/* <div className="w-20">
        <img
          src="https://image.shutterstock.com/image-vector/vector-template-colored-emotions-strips-260nw-636671227.jpg"
          alt=""
        />
      </div> */}
      {/* Navber */}
      <div>
        <Navber></Navber>
      </div>
      {/* Outlet */}
      <div>
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

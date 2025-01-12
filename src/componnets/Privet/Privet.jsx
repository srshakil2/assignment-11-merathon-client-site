import { useContext } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import Loding from "../Loding/Loding";
import { Navigate } from "react-router-dom";

const Privet = ({ children }) => {
  const { user, loding } = useContext(MyMainContext);

  if (loding) {
    return <Loding></Loding>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default Privet;

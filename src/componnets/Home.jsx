import { useContext } from "react";
import { MyMainContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const { name } = useContext(MyMainContext);
  console.log(name);
  return (
    <div>
      <p>this is Home</p>
    </div>
  );
};

export default Home;

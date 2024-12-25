import React, { useContext, useEffect, useState } from "react";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Details = () => {
  const [marathon, setMarathon] = useState({});
  const { dataId } = useContext(MyMainContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/${dataId}`)
      .then((res) => setMarathon({ ...res?.data }))
      .catch((err) => console.log(err));
  }, [dataId]);
  console.log(marathon);
  return (
    <div>
      <p>{marathon?.marathon_title}</p>
    </div>
  );
};

export default Details;

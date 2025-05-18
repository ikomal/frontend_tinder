import { useEffect } from "react";
import { Base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { addconnection } from "../utils/connectionslice";

const Connections = () => {
  const connection = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchconnections = async () => {
    try {
      const res = await axios.get(Base_url + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addconnection(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchconnections();
  }, []);

  //   if(!connections) return;
  //   if(connection.length ===0) return <h1>NO connections found</h1>
  return (
    <div className="text-center my-10 ">
      <h1 className="text-3xl font-bold text-white">Connections</h1>
      {connection.map((connection) => {
        const { firstName, lastName, age, gender, photourl, about } =
          connection;
        return (
          <div className="flex m-8 p-4 rounded-lg bg-base-300 w-1/2 mx-auto ">
            <div className="">
              <img src={photourl} alt="" className="rounded-full h-20 w-20" />
            </div>
            <div className="text-left mx-4">
              <h1>{firstName + " " + lastName}</h1>
              {age && gender && <p>{age+" ,"+gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

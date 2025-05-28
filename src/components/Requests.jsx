import axios from "axios";
import { Base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addrequest, removerequest } from "../utils/requestslice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  const dispatch = useDispatch();
  const reviewRequest = async (status,_id) => {
    try {
      const res=await axios.post(Base_url+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
      dispatch(removerequest(_id))
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchRequest = async () => {
    try {
      const res = await axios.get(Base_url + "/user/request/pending", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addrequest(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return;
  if (requests.length === 0)
    return (
      <h1 className="text-2xl font-bold text-center my-4 py-4">
        No requests found
      </h1>
    );
  return (
    <div className="text-center my-10 ">
      <h1 className="text-3xl font-bold text-white">Requests</h1>
      {requests?.map((requests) => {
        const { _id,firstName, lastName, age, gender, photourl, about } =
          requests.fromSenderid;
        return (
          <div className="flex m-8 justify-between items-center p-4 rounded-lg bg-base-300 w-1/3 mx-auto ">
            <div className="">
              <img src={photourl} alt="" className="rounded-full h-20 w-20" />
            </div>
            <div className="text-left mx-4">
              <h1>{firstName + " " + lastName}</h1>
              {age && gender && <p>{age + " ," + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex justify-center ">
              <button className="btn btn-secondary   mx-2" onClick={()=>reviewRequest("rejected",requests._id)}>Reject</button>
              <button className="btn btn-primary "onClick={()=>reviewRequest("accepted",requests._id)}>Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

import { useNavigate } from "react-router";
import React, { useState } from "react";
import UserCard from "./UserCard";
import { Base_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { adduser } from "../utils/userslice";

const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [photourl, setphotUrl] = useState(user.photourl);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const[showtoast,setshowtoast]=useState(false);
  const dispatch = useDispatch();

  const saveupdate = async () => {
    setError("");
    try {
      const res = await axios.patch(
        Base_url + "/profile/edit",
        { firstName, lastName, gender, age, about, photourl },
        { withCredentials: true }
      );
      dispatch(adduser(res?.data?.data));
      setshowtoast(true);
      setTimeout(()=>{
        setshowtoast(false)
      },3000)
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="">
        <div className="flex  justify-center  my-10 ">
          <div className="card w-96 bg-base-300  my-6 mx-10 card-md shadow-sm  ">
            <div className="card-body flex ">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setlastName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="text"
                  value={age}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photourl</legend>
                <input
                  type="text"
                  value={photourl}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setphotUrl(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  value={gender}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  value={about}
                  className="input border-none "
                  placeholder=""
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>

              <p className="text-red-500">{error}</p>

              <div className="justify-center card-actions ">
                <button
                  className="btn btn-primary justify-center"
                  onClick={saveupdate}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <UserCard
            user={{ firstName, lastName, gender, age, about, photourl }}
          />
        </div>
        {showtoast && < div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>}
        
      </div>
    </>
  );
};

export default EditProfile;

import React, { useEffect } from "react";
import axios from "axios";

import { Base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "../utils/feedslice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  // console.log(feed);
  const dispatch = useDispatch();
  const getfeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(Base_url + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addfeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getfeed();
  }, []);
  return (
    feed && (
      <div className="flex-col flex-wrap ">
        {feed?.data?.map((user, index) => (
          <div key={index} className="m-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    )
  );
};

export default Feed;

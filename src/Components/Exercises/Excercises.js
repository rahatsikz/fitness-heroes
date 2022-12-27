import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sidebar from "../Sidebar/Sidebar";

const Excercises = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="px-12 py-6 grid xl:w-3/4 justify-items-center">
        <h3 className="text-xl justify-self-start pb-6">
          Select today's exercise
        </h3>
        <div className="activity-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {activities.map((activity) => (
            <Activity key={activity.id} activity={activity}></Activity>
          ))}
        </div>
      </div>
      <div className="xl:w-1/4 bg-white xl:-mt-24 p-12">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Excercises;

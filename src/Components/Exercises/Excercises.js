import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sidebar from "../Sidebar/Sidebar";

const Excercises = () => {
  const [activities, setActivities] = useState([]);
  const [selection, setSelection] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  const handleAddToList = (activity) => {
    // console.log("clicked", activity);
    const newSelection = [...selection, activity];
    setSelection(newSelection);
  };
  return (
    <div className="flex flex-col 2xl:flex-row">
      <div className="px-12 py-6 grid 2xl:w-3/4 justify-items-center">
        <h3 className="text-xl justify-self-start pb-6">
          Select today's exercise
        </h3>
        <div className="activity-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
              handleAdd={handleAddToList}
            ></Activity>
          ))}
        </div>
      </div>
      <div className="2xl:w-1/4 bg-white 2xl:-mt-24 p-12">
        <Sidebar selection={selection}></Sidebar>
      </div>
    </div>
  );
};

export default Excercises;

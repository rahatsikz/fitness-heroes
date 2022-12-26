import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

const Excercises = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="px-12 pt-6 text-xl">
      <h3>Select today's exercise</h3>
      <div className="activity-container grid grid-cols-3">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Excercises;

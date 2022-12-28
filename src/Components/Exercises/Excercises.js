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
    <div>
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
        <div className="2xl:w-1/4 bg-white 2xl:-mt-24 p-12 rounded-xl">
          <Sidebar selection={selection}></Sidebar>
        </div>
      </div>

      <div className="w-3/4 xl:w-1/2 mx-auto p-12">
        <p className="text-center mb-4 text-xl font-bold">FAQ</p>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-stone-500 peer-checked:bg-bg-white peer-checked:text-stone-500">
            How does react work?
          </div>
          <div className="collapse-content bg-emerald-400 my-4 text-primary-content peer-checked:bg-emerald-400 peer-checked:text-secondary-content">
            <p className="pt-3">
              React implements a virtual DOM that is basically a DOM tree
              representation in JavaScript. So when it needs to read or write to
              the DOM, it will use the virtual representation of it. Then the
              virtual DOM will try to find the most efficient way to update the
              browser's DOM.Unlike browser DOM elements, React elements are
              plain objects and are cheap to create. React DOM takes care of
              updating the DOM to match the React elements.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-stone-500 peer-checked:bg-bg-white peer-checked:text-stone-500">
            What is the difference between props & state?
          </div>
          <div className="collapse-content bg-emerald-400 my-4 text-primary-content peer-checked:bg-emerald-400 peer-checked:text-secondary-content">
            <p className="pt-3">
              props are passed via component properties, they're not reactive.
              State are variables that react will react , updating the UI when
              values changes. One should use state to store the data your
              current page needs in your controller-view. To pass data & event
              handlers down to your child components, use props.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excercises;

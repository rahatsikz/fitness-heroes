import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import selfImage from "../../images/self.png";

const Sidebar = (props) => {
  const { selection } = props;
  const excerciseTime = selection.reduce((x, y) => x + y.time, 0);
  return (
    <div className="sticky top-4">
      <div className="flex items-center justify-center">
        <img src={selfImage} alt="" className="w-16" />
        <div className="px-4">
          <h3 className="font-bold text-lg">Rahat Sikder</h3>
          <p className="text-slate-500">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp; Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex justify-evenly bg-emerald-100 py-6 mt-8 rounded-lg">
        <span>
          <p className="text-xl font-semibold">60 Kg</p>
          <p className="text-gray-500">Weight</p>
        </span>
        <span>
          <p className="text-xl font-semibold">5.7</p>
          <p className="text-gray-500">Height</p>
        </span>
        <span>
          <p className="text-xl font-semibold">29 yrs</p>
          <p className="text-gray-500">Age</p>
        </span>
      </div>
      <p className="text-xl font-bold my-4">Add a break</p>
      <div className="flex justify-evenly bg-emerald-100 py-6 rounded-lg">
        <span className="rounded-full bg-white py-2.5 px-3.5">10</span>
        <span className="rounded-full bg-white py-2.5 px-3.5">20</span>
        <span className="rounded-full bg-white py-2.5 px-3.5">30</span>
        <span className="rounded-full bg-white py-2.5 px-3.5">40</span>
        <span className="rounded-full bg-white py-2.5 px-3.5">50</span>
      </div>
      <p className="text-xl font-bold my-4">Excercise Details</p>
      <div className="flex justify-around bg-emerald-100 py-6 rounded-lg">
        <span className="text-lg font-semibold">Excercise Time</span>
        <span className="text-gray-500"> {excerciseTime} Seconds </span>
      </div>
      <div className="flex justify-around bg-emerald-100 py-6 rounded-lg mt-4">
        <span className="text-lg font-semibold">Break Time</span>
        <span>0</span>
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-accent btn-wide text-white">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

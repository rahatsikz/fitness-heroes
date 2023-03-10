import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import selfImage from "../../images/self.png";
import "./Sidebar.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addClassActive,
  addToDb,
  getClassActive,
  getFromdb,
} from "../../utilities/fakedb";

const Sidebar = (props) => {
  const { selection } = props;
  const excerciseTime = selection.reduce((x, y) => x + y.time, 0);

  const [restTime, setRestTime] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const storedTime = getFromdb("time");
    setRestTime(storedTime);
  }, []);

  useEffect(() => {
    const storedClass = getClassActive("name");
    setActive(storedClass);
    if (storedClass) {
      const breakTimes = document.getElementsByClassName("break");

      if (parseInt(restTime.slice(0, 2)) === 10) {
        breakTimes[0].className += " active";
      } else if (parseInt(restTime.slice(0, 2)) === 20) {
        breakTimes[1].className += " active";
      } else if (parseInt(restTime.slice(0, 2)) === 30) {
        breakTimes[2].className += " active";
      } else if (parseInt(restTime.slice(0, 2)) === 40) {
        breakTimes[3].className += " active";
      } else if (parseInt(restTime.slice(0, 2)) === 50) {
        breakTimes[4].className += " active";
      }
    }
  }, [restTime]);

  const breakTimes = document.getElementsByClassName("break");
  for (const breakTime of breakTimes) {
    breakTime.addEventListener("click", function () {
      const display = document.getElementById("break-display");
      display.innerText = breakTime.innerText.slice(0, 2) + " Seconds";

      let activeStatus = active;
      const current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
        activeStatus = true;
      }
      this.className += " active";

      addToDb("time", display.innerText);
      addClassActive("name", activeStatus);
    });
  }

  const breakDisplay = document.getElementById("break-display");

  const handleToast = (time, breakValue) => {
    toast.success(
      `You completed exercises in ${time}s with ${
        breakValue ? parseInt(breakDisplay.innerText.slice(0, 2)) : 0
      }s break`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };
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
        <button className="rounded-full bg-white py-4 px-4 break">10s</button>
        <button className="rounded-full bg-white py-4 px-4 break">20s</button>
        <button className="rounded-full bg-white py-4 px-4 break">30s</button>
        <button className="rounded-full bg-white py-4 px-4 break">40s</button>
        <button className="rounded-full bg-white py-4 px-4 break">50s</button>
      </div>
      <p className="text-xl font-bold my-4">Excercise Details</p>
      <div className="flex justify-around bg-emerald-100 py-6 rounded-lg">
        <span className="text-lg font-semibold">Excercise Time</span>
        <span className="text-gray-500"> {excerciseTime} Seconds </span>
      </div>
      <div className="flex justify-around bg-emerald-100 py-6 rounded-lg mt-4">
        <span className="text-lg font-semibold">Break Time</span>
        <span id="break-display" className="text-gray-500">
          {restTime ? restTime : "0 Seconds"}
        </span>
      </div>
      <div className="text-center mt-8">
        <button
          className="btn btn-accent btn-wide text-white"
          onClick={() => handleToast(excerciseTime, breakDisplay)}
        >
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Sidebar;

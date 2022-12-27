import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import selfImage from "../../images/self.png";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src={selfImage} alt="" className="w-16" />
        <div className="px-4">
          <h3 className="font-bold text-lg">Rahat Sikder</h3>
          <p className="text-slate-500">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp; Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

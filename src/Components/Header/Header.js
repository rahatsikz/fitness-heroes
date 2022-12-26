import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-1/2">
      <h3 className="text-emerald-400 text-3xl font-bold pt-12 px-12">
        <FontAwesomeIcon icon={faDumbbell} /> Fitness Heroes
      </h3>
    </div>
  );
};

export default Header;

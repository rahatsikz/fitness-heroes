import React from "react";

const Activity = (props) => {
  const { name, picture, time, forAge, about } = props.activity;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="activity" className="rounded-xl h-64" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <p className="text-slate-500"> {about.slice(20)}</p>
        <p className="font-semibold"> For age: {forAge} </p>
        <p className="font-semibold">Time required: {time}s </p>
        <div className="card-actions">
          <button className="btn btn-accent text-white">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Activity;

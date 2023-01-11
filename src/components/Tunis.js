import React from "react";
import { Link } from "react-router-dom";

const Tunis = ({ tunis }) => {
  return (
    <div
      className="bg-white shadow-1 p-5 rounded-lg rounded-t1-[90px]
   w-full max-w-[370px]  mx-auto cursor-pointer hover:shadow-2x1 transition"
      style={{ height: "580px", marginTop: "20px" }}
    >
      <img
        className="mb-8"
        src={tunis.image}
        alt=""
        style={{ width: "400px", height: "170px" }}
      />
      <div
        className="mb-4  gap-x-2 text-sm"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="text-lg font-semibold max-w-[260px]"
          style={{ color: "#e31d28" }}
        >
          <h1>
            {tunis.type} {tunis.country}
          </h1>
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{tunis.address}</div>
      <div>
        <p>{tunis.description}</p>
      </div>
      <div style={{ float: "right" }}>
        <Link to={`/property/${tunis.id}`}>lire plus</Link>
      </div>
    </div>
  );
};

export default Tunis;

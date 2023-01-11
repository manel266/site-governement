import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import { useState } from "react";

import { TunisData, tunisData } from "../data";
import { useParams } from "react-router-dom";
import { Bibed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const tunis = TunisData.find((tunis) => {
    return tunis.id === parseInt(id);
  });
  const [lng, setLng] = useState(tunis.log);
  const [lat, setLat] = useState(tunis.lat);
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div>
          <div className="flex flex-col lg-flex-row lg-items-center">
            <center>
            <div>
              <img className="mb-8" src={tunis.image} alt="" />
            </div>
            </center>
            <div>
              <h1
                style={{ fontSize: "50px", color: "#e31d28" }}
                className="text-center"
              >
                {tunis.country} {tunis.type}
              </h1>
              <h3 style={{ fontSize: "30px" }}>{tunis.address}</h3>
            </div>
            <div></div>
            <div style={{ marginTop: "30px" }}>{tunis.description}</div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default PropertyDetails;

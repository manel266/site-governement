import React, { useContext } from "react";
import { TunisContext } from "./TunisContext";
import Tunis from "./Tunis";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
const TunisList = () => {
  const { tunis, loading } = useContext(TunisContext);
  if (loading) {
    return (
      <ImSpinner2
        className="mx-auto animate-spin  text-4x1  mt-[200px]"
        style={{ color: "#e31d28", fontSize: "60px" }}
      />
    );
  }
  if (tunis.length < 1) {
    return (
      <div>
        {" "}
        <h1
          className="container text-center  "
          style={{ fontSize: "60px", marginTop: "40px" }}
        >
          Not Found :( ...
        </h1>
      </div>
    );
  }
  return (
    <section className="mb-20 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {tunis.map((tunis, index) => {
            return (
              <Link to={`/property/${tunis.id}`}>
                <Tunis tunis={tunis} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TunisList;

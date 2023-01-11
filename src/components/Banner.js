import React from "react";
import Image from "../assets/img/tunissidebar.jpg";

const Banner = () => {
  return (
    <section className="h-full  mb-8 xl:mb-24 container max-w-[2000]">
      <div className="flex flex-col lg:flex-row ">
        <div
          className="lg:ml-8 xl:ml-[100px] flex flex-col otems-center lg:itels-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
          style={{ paddingLeft: "30px" }}
        >
          <h1 className="text-4x1 lg:text-[58px] font-semibold leading-none mb-12">
            <span
              style={{  marginBottom: "20px" }}
              className="mb-8"
            >
              Bienvenue à Tunis

            </span>
            <br />
              مرحبا بكم في تونس الخضراء
          </h1>
          <p>
          Tunis, la capitale de la Tunisie, est située sur une colline au bord du lac de Tunis, 
          à quelques kilomètres de la côte méditerranéenne de l’Afrique. C’est l’une des villes 
          les plus décontractées de l’Afrique du Nord, avec son charme exotique. Le centre-ville
           est ancien, remontant à l’Empire ottoman, mais il est entouré par l’infrastructure d’une 
           ville arabe moderne, de sorte que vous verrez ses deux visages.
          </p>
        </div>
        <div>
          <img
            src={Image}
            alt=""
            style={{ width: "500px", height: "380px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import Image from "react-bootstrap/Image";
import EdiGraovac from "../assets/images/EdiGraovac.jpg";

export const AboutMePage = () => {
  return (
    <div className="mt-5 container w-100  h-75">
      <div className="row row-cols-1 row-cols-lg-2 w-100 h-100">
        <div className="col">
          <div className="d-flex ">
            <Image src={EdiGraovac} className={"w-50 shadow rounded"} rounded />
            <div className={"ms-2 d-flex-column "}>
              <h3>Edi Graovac</h3>
              <p>Oštarije graba 433c</p>

              <p>
                <span>Visoko učilište Algebra</span> <br />
                Programsko inženjerstvo 2. Godina
              </p>
            </div>
          </div>
          <div className="mt-3 d-flex-row justify-content-start">
            <h2>The RESTful Pokémon API</h2>
            <p>
              Serving over <strong>330,000,000</strong> API calls each month!
            </p>
            <p>
              All the Pokémon data you'll ever need in one place,
              <br />
              easily accessible through a modern RESTful API.
            </p>
            <p>
              <a
                href="https://pokeapi.co/docs/v2"
                target="_blank"
                rel="noreferrer"
              >
                Check out the docs!
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <iframe
            className="w-100 h-100 shadow rounded"
            src="https://pokeapi.co"
            title="Try poke api"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

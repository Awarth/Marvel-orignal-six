import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import hulk from "./Assets/Images/hulk.png";
import { useNavigate } from "react-router-dom";

function Hulk() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="mainHulk">
        <div class="left">
          <div className="avengersLogo">
            <img src={AvengersLogo} alt="avengers logo" />
          </div>
          <div class="marvelLogo">
            <div className="marvelBackgroundLogo">
              <img src={MarvelLogo} alt="Marvel Logo" />
            </div>
          </div>
          <div class="heroImage">
            <img src={hulk} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Hulk</h1>
            <p>
              Exposed to heavy doses of gamma radiation, scientist Bruce Banner
              transforms into the mean, green rage machine called the Hulk.
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>Hulk</li>
              <li>The Incredible Hulk</li>
            </ul>
            <p className="indexing">03</p>
          </div>
          <div className="sliders">
            <button
              onClick={() => {
                navigate(`/`);
              }}
            ></button>
            <button
              onClick={() => {
                navigate(`/IronMan`);
              }}
            ></button>
            <button
              onClick={() => {
                navigate(`/Hulk`);
              }}
            ></button>
            <button
              onClick={() => {
                navigate(`/BlackWidow`);
              }}
            ></button>
            <button onClick={() => {
                navigate(`/Thor`);
              }}></button>
              <button onClick={() => {
                navigate(`/HawkEye`);
              }}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hulk;

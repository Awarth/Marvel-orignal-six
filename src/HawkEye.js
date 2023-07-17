import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import Hawkeye from "./Assets/Images/hawk_eye.png";
import { useNavigate } from "react-router-dom";

function HawkEye() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="mainHawkEye">
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
            <img src={Hawkeye} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Thor</h1>
            <p>
              An expert marksman and fighter, Clint Barton puts his talents to
              good use by working for S.H.I.E.L.D. as a special agent. The
              archer known as Hawkeye also boasts a strong moral compass that at
              times leads him astray from his direct orders.
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>Hawk Eye</li>
            </ul>
            <p className="indexing">06</p>
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
            <button
              onClick={() => {
                navigate(`/Thor`);
              }}
            ></button>
            <button
              onClick={() => {
                navigate(`/HawkEye`);
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HawkEye;

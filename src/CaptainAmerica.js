import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import Captainamerica from "./Assets/Images/captain_america.png";
import { useNavigate } from "react-router-dom";

function CaptainAmerica() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="main">
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
            <img src={Captainamerica} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Captain America</h1>
            <p>
              America's World War II Super-Soldier continues his fight in the
              present as an Avenger and untiring sentinel of liberty. He was the
              first Avenger
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>Captain America: The First Avenger</li>
              <li>Captain America: The Winter Soldier</li>
              <li>Captain America: Civil War</li>
              <li>The Falcon and the Winter Soldier</li>
              <li>Captain America: New World Order</li>
            </ul>
            <p className="indexing">01</p>
          </div>
          <div className="sliders">
            <button
              onClick={() => {
                navigate(`/`);
              }}
            ></button>
            <button onClick={() => {
              navigate(`/IronMan`);
            }}></button>
            <button onClick={() => {
              navigate(`/Hulk`);
            }}></button>
            <button onClick={() => {
                navigate(`/BlackWidow`);
              }}></button>
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

export default CaptainAmerica;

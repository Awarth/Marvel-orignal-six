import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import Ironman from "./Assets/Images/ironman.png";
import { useNavigate } from "react-router-dom";

function IronMan() {
    let navigate = useNavigate();
  return (
    <div>
      <div class="mainIronMan">
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
            <img src={Ironman} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>IronMan</h1>
            <p>
            Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>IronMan 1</li>
              <li>IronMan 2</li>
              <li>IronMan 3</li>
            </ul>
            <p className="indexing">02</p>
          </div>
          <div className="sliders">
            <button onClick={() => {
              navigate(`/`);
            }}></button>
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

export default IronMan;

import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import Blackwidow from "./Assets/Images/black_widow.png";
import { useNavigate } from "react-router-dom";

function BlackWidow() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="mainBlackwidow">
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
            <img src={Blackwidow} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Black Widow</h1>
            <p>
              A deadly assassin is closing in on Natasha Romanoff. Now Natasha
              must reunite with an unlikely group of spies from her past in
              order to survive and stop a lethal force from being unleashed on
              the world.
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>Black Widow</li>
            </ul>
            <p className="indexing">04</p>
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

export default BlackWidow;

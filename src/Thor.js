import React from "react";
import AvengersLogo from "./Assets/Images/avengerslogo.png";
import MarvelLogo from "./Assets/Images/marvel_logo.png";
import THor from "./Assets/Images/thor.png";
import { useNavigate } from "react-router-dom";

function Thor() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="mainThor">
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
            <img src={THor} alt="Captain America" />
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Thor</h1>
            <p>
              Thor Odinson wields the power of the ancient Asgardians to fight
              evil throughout the Nine Realms and beyond.
            </p>
            {/* <button>
              Read more
            </button> */}
            <h2>Movies & Series</h2>
            <ul typeof="circle">
              <li>Thor</li>
              <li>Thor: The Dark World</li>
              <li>Thor: Ragnarok</li>
              <li>Thor: Love and Thunder</li>
            </ul>
            <p className="indexing">05</p>
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

export default Thor;

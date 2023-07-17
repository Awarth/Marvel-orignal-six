import { Routes, HashRouter, Route } from "react-router-dom";
import CaptainAmerica from "./CaptainAmerica";
import IronMan from "./IronMan";
import Hulk from "./Hulk";
import BlackWidow from "./BlackWidow";
import Thor from "./Thor";
import HawkEye from "./HawkEye";

function Routers() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<CaptainAmerica />} />
          <Route path="/IronMan" element={<IronMan />} />
          <Route path="/Hulk" element={<Hulk />} />
          <Route path="/BlackWidow" element={<BlackWidow />} />
          <Route path="/Thor" element={<Thor />} />
          <Route path="/HawkEye" element={<HawkEye />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Routers;

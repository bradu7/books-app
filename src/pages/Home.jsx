import SelfHelp from "../components/SelfHelp";
import BestSellers from "../components/Bestsellers";
import { Nav } from "../components/Nav";
import React from "react";
import Favorites from "../books/Favorites";

function Home() {
  return (
    <div>
      <Nav />
      <BestSellers />
      <SelfHelp />
    </div>
  );
}

export default Home;

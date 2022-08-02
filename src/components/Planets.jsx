import { useEffect } from "react";
import { getAllPlanets, getPlanet } from "../services";
import Card from "./Card";
import ItemList from "./ItemList";

const Planets = ({ planets, planet, onPlanetClick, setPlanet, setPlanets }) => {
  useEffect(() => {
    getAllPlanets().then(planets => setPlanets(planets));
    getPlanet(2).then(planet => setPlanet(planet));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="content-list">
        <ItemList list={planets} onItemClick={onPlanetClick} />
      </div>
      <div className="content-details">
        <Card entity={planet} />
      </div>
    </>
  );
};

export default Planets;

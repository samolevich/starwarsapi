import { useState, useEffect } from "react";
import {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
  getPerson,
  getPlanet,
  getStarShip,
} from "../services";
import Header from "./Header";
import ItemList from "./ItemList";
import Card from "./Card";

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [person, setPerson] = useState({});
  const [planet, setPlanet] = useState({});
  const [starship, setStarship] = useState({});

  useEffect(() => {
    (async () => {
      setPeople(await getAllPeople());
      setPlanets(await getAllPlanets());
      setStarships(await getAllStarships());
      setPerson(await getPerson(2));
      setPlanet(await getPlanet(2));
      setStarship(await getStarShip(2));
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="content-list">
          <p>{person.name}</p>
          <p>{planet.name}</p>
          <p>{starship.name}</p>
          <ItemList list={people} />
          <hr />
          <ItemList list={planets} />
          <hr />
          <ItemList list={starships} />
        </div>
        <div className="content-details">
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;

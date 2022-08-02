import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import {
  getAllPeople,
  // getAllPlanets,
  // getAllStarships,
  getPerson,
  // getPlanet,
  // getStarShip,
} from "../services";

// import ItemList from "./ItemList";
// import Card from "./Card";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Persons from "./Persons";
import Starships from "./Starships";
import Planets from "./Planets";

const App = () => {
  const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [starships, setStarships] = useState([]);
  const [person, setPerson] = useState({});
  // const [planet, setPlanet] = useState({});
  // const [starship, setStarship] = useState({});

  const routes = [
    { name: "Home", path: "" },
    { name: "Persons", path: "persons" },
    { name: "Starships", path: "starships" },
    { name: "Planets", path: "planets" },
  ];

  useEffect(() => {
    (async () => {
      setPeople(await getAllPeople());
      // setPlanets(await getAllPlanets());
      // setStarships(await getAllStarships());
      // setPerson(await getPerson(1));
      // setPlanet(await getPlanet(2));
      // setStarship(await getStarShip(2));
    })();
    getPerson(5).then(person => setPerson(person));
  }, []);
  // console.log(person);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout routes={routes} />}>
          <Route index element={<Homepage routes={routes} />} />
          <Route
            path="persons"
            element={<Persons person={person} people={people} />}
          />
          <Route path="starships" element={<Starships />} />
          <Route path="planets" element={<Planets />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

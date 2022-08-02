import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { getPerson, getStarship, getPlanet } from "../services";

import Layout from "./Layout";
import Homepage from "./Homepage";
import Persons from "./Persons";
import Starships from "./Starships";
import Planets from "./Planets";

const App = () => {
  const initialEntity = {
    name: "wait..",
    header: "wait..",
    id: 0,
  };
  const [people, setPeople] = useState([initialEntity]);
  const [starships, setStarships] = useState([initialEntity]);
  const [planets, setPlanets] = useState([initialEntity]);
  const [person, setPerson] = useState(initialEntity);
  const [starship, setStarship] = useState(initialEntity);
  const [planet, setPlanet] = useState(initialEntity);

  const routes = [
    { name: "Home", path: "" },
    { name: "Persons", path: "persons" },
    { name: "Starships", path: "starships" },
    { name: "Planets", path: "planets" },
  ];

  const onPersonClick = id => {
    getPerson(id).then(person => setPerson(person));
  };

  const onStarshipClick = id => {
    getStarship(id).then(starship => setStarship(starship));
  };

  const onPlanetClick = id => {
    getPlanet(id).then(planet => setPlanet(planet));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout routes={routes} />}>
          <Route index element={<Homepage routes={routes} />} />
          <Route
            path="persons"
            element={
              <Persons
                person={person}
                people={people}
                setPeople={setPeople}
                setPerson={setPerson}
                onPersonClick={onPersonClick}
              />
            }
          />
          <Route
            path="starships"
            element={
              <Starships
                starship={starship}
                starships={starships}
                setStarship={setStarship}
                setStarships={setStarships}
                onStarshipClick={onStarshipClick}
              />
            }
          />
          <Route
            path="planets"
            element={
              <Planets
                planet={planet}
                planets={planets}
                setPlanet={setPlanet}
                setPlanets={setPlanets}
                onPlanetClick={onPlanetClick}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;

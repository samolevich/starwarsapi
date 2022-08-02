import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { getPerson, getStarship, getPlanet } from "../services";

import Layout from "./Layout";
import Homepage from "./Homepage";
import Persons from "./Persons";
import Starships from "./Starships";
import Planets from "./Planets";

const App = () => {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [person, setPerson] = useState({});
  const [starship, setStarship] = useState({});
  const [planet, setPlanet] = useState({});

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

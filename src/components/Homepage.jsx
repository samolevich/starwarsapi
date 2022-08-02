import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPerson, getPlanet, getStarship } from "../services";
import Card from "./Card";

const Homepage = ({
  routes,
  person,
  setPerson,
  starship,
  setStarship,
  planet,
  setPlanet,
}) => {
  const links = routes.map(link => (
    <div className="lightsaber" key={link.name}>
      <Link to={link.path}>{link.name}</Link>
    </div>
  ));

  useEffect(() => {
    getPerson(42).then(person => setPerson(person));
    getStarship(22).then(starship => setStarship(starship));
    getPlanet(11).then(planet => setPlanet(planet));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="menu">{links}</div>
      <div>
        <Card entity={person} />
        <Card entity={starship} />
        <Card entity={planet} />
      </div>
    </>
  );
};

export default Homepage;

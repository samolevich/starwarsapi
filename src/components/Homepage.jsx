import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="menu">
        <div className="lightsaber">
          <Link to="">Home</Link>
        </div>
        <div className="lightsaber">
          <Link to="persons">Persons</Link>
        </div>
        <div className="lightsaber">
          <Link to="starships">Starships</Link>
        </div>
        <div className="lightsaber">
          <Link to="planets">Planets</Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/persons">Persons</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/planets">Planets</Link>
    </div>
  );
};

export default Homepage;

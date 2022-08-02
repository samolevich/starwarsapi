import { Link } from "react-router-dom";

const Homepage = ({ routes }) => {
  const links = routes.map(link => (
    <div className="lightsaber" key={link.name}>
      <Link to={link.path}>{link.name}</Link>
    </div>
  ));

  return (
    <>
      <div className="menu">{links}</div>
    </>
  );
};

export default Homepage;

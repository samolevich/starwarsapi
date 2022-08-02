import { Link } from "react-router-dom";

const Header = ({ routes }) => {
  const links = routes.map(link => (
    <li className="nav-item" key={link.name}>
      <Link className="nav-link" activeclassname={"active"} to={link.path}>
        {link.name}
      </Link>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav">{links}</ul>
    </nav>
  );
};

export default Header;

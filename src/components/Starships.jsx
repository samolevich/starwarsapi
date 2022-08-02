import { useEffect } from "react";
import { getAllStarships, getStarship } from "../services";
import Card from "./Card";
import ItemList from "./ItemList";

const Starships = ({
  starships,
  starship,
  onStarshipClick,
  setStarship,
  setStarships,
}) => {
  useEffect(() => {
    getAllStarships().then(ships => setStarships(ships));
    const randomOneOfTen = Math.floor(Math.random() * 10 + 1);
    getStarship(randomOneOfTen).then(starship => setStarship(starship));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="content-list">
        <ItemList list={starships} onItemClick={onStarshipClick} />
      </div>
      <div className="content-details">
        <Card entity={starship} />
      </div>
    </>
  );
};

export default Starships;
